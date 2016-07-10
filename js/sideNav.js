function updateSideNav(){
    var navHead = document.getElementById('dynNavId');
    $('#dynNavId').empty();
    
    if(currentCourse == "home"){
        navHead.innerHTML += "<li class='active'><a id='home_nav_button' href ='#' onclick='showMain();return false;' ><i class='fa fa-fw fa-home' ></i> Home</a></li>";
    }
    else{
        navHead.innerHTML += "<li ><a id='home_nav_button' href ='#' onclick='showMain();return false;' ><i class='fa fa-fw fa-home' ></i> Home</a></li>";
    }
    jsonDataObj.forEach(function(e) {
        if(e.courseName == currentCourse){
            navHead.innerHTML += "<li class='active'><a id="+ e.id +"href ='#' onclick='updatePage("+ e.index +");return false;' ><i class='fa fa-fw "+e.icon+"' ></i> "+ e.shortName+"</a></li>";
        }
        else{
            navHead.innerHTML += "<li><a id="+ e.id +"href ='#' onclick='updatePage("+ e.index +");return false;' ><i class='fa fa-fw "+e.icon+"' ></i> "+ e.shortName+"</a></li>";
        }
    });
    console.log("updatesSideNav");
}