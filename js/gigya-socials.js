// Step 1: Construct a UserAction object and fill it with data
var ua = new gigya.socialize.UserAction();
ua.setLinkBack("http://static2.stuff.co.nz/clientdev/production/other/stuck-in-the-ice/");
ua.setTitle("Stuff &ndash; Stuck in the Ice");
     
// Step 2: Define the Share Bar plugin's params object     
var params ={
userAction:ua,
shareButtons:'facebook-like,google-plusone,share,twitter-tweet', // list of providers
containerID: 'socialButtons',
cid:''
};
  
// Step 3: Load the Share Bar plugin:
gigya.socialize.showShareBarUI(params);
                        