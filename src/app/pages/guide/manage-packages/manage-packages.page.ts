import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/shared/services/package/package.service';
import { Package } from 'src/app/shared/services/package/package';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.page.html',
  styleUrls: ['./manage-packages.page.scss'],
})
export class ManagePackagesPage implements OnInit {

  title = "Dux | Manage Packages";
  list: Package[];
  pid: any;
  constructor(public service:PackageService,
    public firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getPackage().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() // this returns the details of a tour
        } as Package;
      })

    });
    console.log(JSON.stringify(this.list));
  }


  onEdit(tr:Package){
    this.service.formData =Object.assign({},tr);
  }

  onDelete(id:string){
    if(confirm("Are you sure?")){
      this.firestore.doc('Package/'+id).delete();

    }
  }

    func(pid) {
      localStorage.setItem('pid', pid);
    }

}
