import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductServices } from '../../Services/product-services';
import { Product } from '../../Models/Product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-create-products',
  styleUrl: './create-products.css',
  templateUrl: './create-products.html',
})
export class CreateProducts {
  private productServices = inject(ProductServices)
  private navigator = inject(Router)
  private activeRoutre = inject(ActivatedRoute)
  private refresh = inject(ChangeDetectorRef)
  public newProduct : Product ={ id: 0, nombre: '', descripcion: '', precio: 0, stock:0, imagenUrl: ''}
  public isEdit : boolean = false

  ngOnInit() : void {
    const paramUrl = this.activeRoutre.snapshot.paramMap.get('id')

    if(paramUrl){
      this.isEdit = true 
      const id = Number(paramUrl)
      this.LoadData(id)
    }
  }

  LoadData(id : number){
    this.productServices.GetProduct(id).subscribe({
      next:(data)=>{
        console.log('Data: ', data)
        this.refresh.markForCheck()
        this.newProduct = data
      },error(err) {
        console.error('Error: ', err)
      },
    })
  }

CallAction(){
  if(this.isEdit){
    this.UpdateProduct()
  }else{
    this.CreateProduct();
  }
}

CreateProduct(){
  this.productServices.CreateProduct(this.newProduct).subscribe({
    next:(response)=>{
      this.navigator.navigate(['/'])
    },error(err) {
      console.error('Error: ', err)
    },
  })
}

UpdateProduct(){
  this.productServices.UpdateProduct(this.newProduct).subscribe({
  next:(response)=>{
    this.navigator.navigate(['/'])
  }, error(err) {
    console.error('Error: ', err)
  },
})
}
}