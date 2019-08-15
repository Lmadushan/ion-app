import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/shared/services/package/package.service';
import { Package } from 'src/app/shared/services/package/package';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {
  title = "DUX | Package Details";

  list: Package[];
  package: any;
  
  constructor(public service: PackageService,
    public firestore: AngularFirestore) { }

  ngOnInit() {
    this.service.getPackage().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() // this returns the details of a tour
        } as Package;

      })

    });

    localStorage.setItem('packages', JSON.stringify(this.package));
    console.log(this.list);
  }


  onEdit(tr: Package) {
    this.service.formData = Object.assign({}, tr);
  }

  onDelete(id: string) {
    if (confirm("Are you sure?")) {
      this.firestore.doc('Package/' + id).delete();

    }
  }
}