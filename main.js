var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = ["https://media.istockphoto.com/id/1352766128/vector/black-couple-with-laptop-and-credit-card-making-an-online-transactions.jpg?s=612x612&w=is&k=20&c=byhXSRJW-vFUxqiFKsXfDPTsVn2Yom8tOQAeZ1e-e34=","https://media.istockphoto.com/id/1322879732/vector/school-girl-ages-between-8-and-14-sitting-at-her-desk-in-a-classroom-and-wants-to-tell-smth.jpg?s=612x612&w=is&k=20&c=5leoI8JSi1YoCqyK_Oi511lxQubkby49M7YVBOuah0g=","https://media.istockphoto.com/id/1322558119/vector/school-girl-ages-between-8-and-14-sitting-at-her-desk-in-a-classroom-and-reading-african.jpg?s=612x612&w=is&k=20&c=Jg7wiv98Zn9rc4tC5FMbR15zKTQ3lj4YbAqBWEHA2lE=","https://media.istockphoto.com/id/1354914916/vector/little-girl-smiling-and-waving-hand-little-girl-portrait-in-circular-shape-elementary-school.jpg?s=612x612&w=is&k=20&c=Af-khM31VQRptj8KGfOOzD2gCFY9kg9vGW0kZwoqdII=","https://media.istockphoto.com/id/1355154457/vector/little-boy-smiling-and-waving-hand-little-boy-portrait-in-circular-shape-elementary-school.jpg?s=612x612&w=is&k=20&c=JAVa1yllQSTRvdXcCnb-osi_kmfCFHtUPoivrjiwkCI="]
        //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = ["Mom and Dad","Twin Sister","Me","Little Sister","Little Brother"] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
