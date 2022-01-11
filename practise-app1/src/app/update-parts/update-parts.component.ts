import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MotorPartsService } from '../motor-parts.service';

@Component({
  selector: 'app-update-parts',
  templateUrl: './update-parts.component.html',
  styleUrls: ['./update-parts.component.css']
})
export class UpdatePartsComponent implements OnInit {

  alert: boolean = false; 
  parts: any;

  updateParts = new FormGroup({
    name: new FormControl(''),
    available_stock: new FormControl(''),
    shelve_number: new FormControl(''),
    bikeModels: new FormArray([])

  });


  get available_stock(){
    return this.updateParts.get('available_stock');
  }
  get name(){
    return this.updateParts.get('name');
  }
  get bikeModels(){
    return this.updateParts.get('bikeModels') as FormArray;
  }

  addBikeModels(){
    this.bikeModels.push(new FormControl(''));
  }

  constructor(private router:ActivatedRoute, private motorParts:MotorPartsService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.motorParts.getCurrentParts(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.updateParts = new FormGroup({
        name: new FormControl(result["name"],Validators.required),
        available_stock: new FormControl(result["available_stock"],[Validators.required,Validators.pattern('^[1-9]+[0-9]*$')]),
        shelve_number: new FormControl(result['shelve_number'],Validators.required),
        bikeModels: new FormArray([])
    
      });
      
      //console.warn(result);
    });
  }

  updateMotorParts(){
    //console.warn(this.updateParts.value);
    this.motorParts.updateCurrentParts(this.router.snapshot.params['id'],this.updateParts.value)
    .subscribe((result)=>{
        console.warn(result);
        this.parts = result;
    });
    this.alert = true;
     this.updateParts.reset({});
  }

  closeAlert(){
    this.alert = false;
  }

  delInput(index: number) { 
    this.bikeModels.removeAt(index);
  }

}
