import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false
    products: any[] =[ 
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "14 gallon capaicity rolling garden cart",
            "price" : 32.332,
            "startRating": 4.3,
            "imageUrl":"assets/images/garden_cart.png"
        },
        {
            "productId": 344,
            "productName": "Hammer",
            "productCode":"GDN-0029002",
            "releaseDate": "March 18, 2023",
            "description": "14 gallon capaicity rolling garden cart",
            "price" : 32002.332,
            "startRating": 42.3,
            "imageUrl":"assets/images/cart.png"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
        /*
        <button class='btn btn-primary'
        (click) = 'toggleImage()'>{{showImage? 'Hide': 'Show'}} Image 

        */
    }
}
// Change Detection:
/*
<button class='btn btn-primary'
    (click) = 'toggleImage()'>
{{showImage? 'Hide': 'Show'}} Image</button>

export class ProductListComponent{
    pageTitle= 'Product List';
    showImage = false;

    toggleImage(): void {
        this.showImage = !this.showImage;// to togle Image 
    }
}

<img *ngIf='showImage'
    [src] = 'produt.imageUrl'
    [title] = 'product.productName'>
    
*/


// Filter By User entry display ement :
/*
Template:
<div class='col-md-2'> Filter by: </div>
<div class='col-md-4'>
    <input type='text' [(ngModel)]='listFilter' />
</div>


Component:
export class ListComponent{
    listFilter: string = 'cart';
}


ng Module is part of Forms Module 

*/


// Tranforming Data with pipes

/*
-Transform ound properties before display

- Build-in pipes: data , number , decimal , percent, currency, json, etc.

- Custom pipes

Pipe Examples:
{{ product.productCode | lowercase }}


Pipes in Property binding:
<img [src]= 'product.imageUrl' [title]='product.productName } uppercase'>

{{ product.price | currency | lowercase }}
{{ product.price | currency:'USD': 'symbol': '1.2-2' }}

*/


// Data Bindig:

