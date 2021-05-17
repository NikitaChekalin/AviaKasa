    // let searchValue = ( ) => document.querySelectorAll("#rendereds")
    //         if (searchValue) {
    //             window.addEventListener(document.querySelectorAll('#rendereds'), (e) => {
    //                 [...document.querySelectorAll("#rendered tr")].forEach(item => {
    //                     if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
    //                         item.style.borderRadius = "15px";
    //                         item.style.display = "";
                                        
    //                     } else {
    //                         item.style.display = "none";
    //                     }
    //                 });
    //             });
    //         } 
    // export default searchValue        


let searchValue = ( ) => document.querySelectorAll(".renderInput")
        if (searchValue) {
            window.addEventListener(  'input', (e) => {

                [...document.querySelectorAll(".rendredHere tr")].forEach(item => {
                    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                        item.style.borderRadius = "15px";
                        item.style.display = "";
                                    
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        } 


/* <div className="fields">
                <input  type="text"   className="renderInput"   />
                <label> Пошук</label>    
            </div>  */