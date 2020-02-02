import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})

export class ShopsComponent implements OnInit {
 
  products=[
    {
         "productName" : "T-Shirt",
         "basePrice" : 500,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "selectedVar":{
          "size" : "xl",
          "meterial" : "cotton",
          "color" : "yellow",
          },
         "varients" : [
              {
                   "type" : "Size",
                   "values" : ["xl","xxl"]
              },
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              },
         ],
         "varientDetails" : [
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 70
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 80
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 90
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 100
              }
         ]
    },
    {
         "productName" : "Saree",
         "basePrice" : 5000,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "selectedVar":{
                         "meterial" : "cotton",
                         "color" : "yellow",
                        },
         "varients" : [
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              }
         ]
    }
]


// form = new FormGroup({
//   Size: new FormControl(''),
//   meterial: new FormControl(''),
//   color: new FormControl(''),
// });

  constructor() { }

  ngOnInit() {
  }


  array=[]

fun(para){
  // console.log(document.getElementById("T-Shirt-Size").value)
  // console.log(document.getElementById("Saree-Meterial").value)

  if(para=="T-Shirt"){
       
       let obj={ name:"T-Shirt",
                 size:document.getElementById("T-Shirt-Size").value,
                 material:document.getElementById("T-Shirt-Meterial").value,
                 color:document.getElementById("T-Shirt-Color").value,
                 price:document.getElementById("T-Shirt-cost").innerText
               }

             this.array.push(obj)
   //     this.array.push(document.getElementById("T-Shirt-Size").value,
     //   document.getElementById("T-Shirt-Meterial").value,document.getElementById("T-Shirt-Color").value)
     console.log(document.getElementById("T-Shirt-Size").getAttribute("value"))
  }
 

  if(para=="Saree"){
   let obj={  name:"Saree",
        material:document.getElementById("Saree-Meterial").value,
        color:document.getElementById("Saree-Color").value,
        price:document.getElementById("Saree-cost").innerText
     }

   this.array.push(obj)
   //     this.array.push(document.getElementById("Saree-Meterial").value,document.getElementById("Saree-Color").value)
  }

}


  onchange(name,type,val){
     //   console.log(name)
    console.log(name,type,val)
    let product= this.products.find((para)=>{
          return para.productName == name;
    })
    product.selectedVar[type.toLowerCase()] = val

   let varientDetails=product.varientDetails.find((para)=>{
           return para.size == product.selectedVar.size && para.color == product.selectedVar.color && para.meterial == product.selectedVar.meterial 
  })
  console.log(varientDetails)
  var addon =varientDetails.addOnprice
//   console.log(addon)
  if(name == "T-Shirt"){
     product.basePrice=500+addon
  }
  if(name == "Saree"){
     product.basePrice=5000+addon
  }
//   product.basePrice=product.basePrice+addon
  console.log(product.basePrice)
//   console.log( document.getElementById("Saree-Meterial").getAttribute("value"))

}

}

