import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MotorPartsService } from '../motor-parts.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-parts',
  templateUrl: './view-parts.component.html',
  styleUrls: ['./view-parts.component.css']
})
export class ViewPartsComponent implements OnInit {
 
  parts : any;
  partsName: any;
  p:number =1;
  alert: boolean = false;
  closeResult: any;
 
  constructor(private motorParts:MotorPartsService,  private modalService:NgbModal
    ) { }


  ngOnInit(): void {
    this.motorParts.getParts().subscribe((result)=>{
      console.warn(result);
      this.parts = result;
    });
  }

  Search(){
    if(this.partsName == ''){
      this.ngOnInit();
    }else{
      this.parts = this.parts.filter((res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.partsName.toLocaleLowerCase());
      });
    }
  }

  key:any = 'id';
  reverse: boolean =false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  open(content: any, item: any) {  
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: string) => {  
      this.closeResult = `Closed with: ${result}`;  
      if (result === 'yes') {  
        this.deleteParts(item);  
      }  
    }, (reason: any) => {  
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    });  
  }  

  private getDismissReason(reason: any): string {  
    if (reason === ModalDismissReasons.ESC) {  
      return 'by pressing ESC';  
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      return 'by clicking on a backdrop';  
    } else {  
      return `with: ${reason}`;  
    }  
  }  

  deleteParts(item: any){
    this.parts.splice(item-1,1)
    this.motorParts.deleteParts(item).subscribe((result)=>{
        console.warn(result)
    });
    this.alert = true;
  }
  closeAlert(){
    this.alert = false;
  }

}
