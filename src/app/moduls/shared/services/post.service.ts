import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import Post from "../../../dto/Post";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private  fireStoreService:AngularFirestore) { }


  findallDataFireStore(){

    return  this.fireStoreService.collection('post-data').snapshotChanges();


  }
  deleteDataFireStore(id:any){
     return this.fireStoreService.collection('post-data').doc(id).delete();

  }

  createDataFireStore(post:Post) {
    return new Promise<any> (( resolve,rejects) =>{

      this.fireStoreService.collection('post-data').add(post).then(responce =>{
        console.log(responce)
      },error=>{
        console.log(error)
      });
    });

  }





  findDataFireStore(id:any){

    return  this.fireStoreService.collection('post-data').doc(id).valueChanges();


  }
  updateDataFireStore(post:Post){

   return  this.fireStoreService.collection('post-data').doc(post.id).update({
      userid:post.userid,
      title:post.title,
      body:post.body
    });

  }


}
