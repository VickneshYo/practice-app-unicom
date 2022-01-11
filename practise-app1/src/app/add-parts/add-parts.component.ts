import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { MotorPartsService } from '../motor-parts.service';
@Component({
  selector: 'app-add-parts',
  templateUrl: './add-parts.component.html',
  styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent implements OnInit {
  
  alert: boolean = false;
  parts: any;

  

  addParts = new FormGroup({
    name: new FormControl('',Validators.required),
    available_stock: new FormControl('',[Validators.required,Validators.pattern('^[1-9]+[0-9]*$')]),
    shelve_number: new FormControl('',Validators.required),
    bikeModels: new FormArray([])

  });

 
  get available_stock(){
    return this.addParts.get('available_stock');
  }
  get name(){
    return this.addParts.get('name');
  }

  get bikeModels(){
    return this.addParts.get('bikeModels') as FormArray;
  }

  addBikeModels(){
    this.bikeModels.push(new FormControl(''));
  }

  constructor(private motorParts: MotorPartsService) { 

  }

  ngOnInit(): void {
  }

  addMotorParts(){
    //console.warn(this.addParts.value)
    this.motorParts.addParts(this.addParts.value).subscribe((result)=>{
      console.warn(result);
      this.parts = result;
    });
    
    this.alert = true;
    this.addParts.reset({});
    return this.addParts.value;
      
  }

  closeAlert(){
    this.alert = false;
  }

  delInput(index: number) {
   
    this.bikeModels.removeAt(index);
  }

}
