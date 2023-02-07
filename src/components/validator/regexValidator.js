//emailRegex /^[^\s@]+@[^\s@]+$/;

// passwordRegex (?.?[A-Z])(?.?[a-z])(??[0-9])(?.?[1@$%^&*-]). (8)5/;



export const emailValidator = email => {
 const emailRegex =/^[^\s@]+@[^\s@]+$/;
 return emailRegex.test(email)
}


export const passwordVlidator = password => {
    

  const passwordRegex = /^(?=.*?[A-Z])(?.?[a-z])(??[0-9])(?.?[1@$%^&*-]). (8)5/;
     


}