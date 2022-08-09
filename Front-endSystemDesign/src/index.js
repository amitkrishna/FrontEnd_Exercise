class Stars{
    constructor(
        className="", 
        numOfStars = 0, 
        styleOptions={margin: '5px'}
        ) {

        this.isValid = false;
        this.numOfStars = numOfStars;
        this.stars = [];
        this.styleOptions = styleOptions;
        this.starsContainer = document.querySelector(className); 
        
        try{
            if(this.starsContainer){
                this.className = className;
                this.isValid = true;
            }else{
                this.isValid = false;
                throw new Error(`${className} does not exist.`);
            }
        }catch(e){
            console.log(e.message);
        }
        
        if(this.isValid){
            this.init();
        }

    }

    init() {
        const ul = document.createElement('ul');

        for (let i=0; i< this.numOfStars; i++){
            this.stars.push({id: i +1});
        }

        ul.style.listStyleType = 'none';
        ul.style.display = 'flex';

        const stars = this.stars.map((star) =>{
            
           const li =  document.createElement('li');
           const a = document.createElement('a');


           li.style.margin = this.styleOptions.margin;

           a.style.cursor = 'pointer';

           a.innerHTML = "&#9733";
           a.id = star.id;

            a.addEventListener('click', )

        });
        
    }

    setRating(){}
}