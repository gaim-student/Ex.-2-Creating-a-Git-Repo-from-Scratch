const quote = {
    user: 'Gari',
    quotation: ["periodtt.", "go stupid go crazy", "baby"]
};

function random_item(quotation)
{
  
return quotation[Math.floor(Math.random()*quotation.length)];
     
}
const { user, quotation } = quote;

console.log(user, random_item(quotation));







