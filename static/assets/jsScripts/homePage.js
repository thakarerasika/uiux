var dir = "/FullPageScreenshots/";
var fileextension = ".png";

function homePage() {
    sessionStorage.clear();
    var jsonDocument;
    var pageNumber = "page "

    var jsonMap;


    var fileNames = new Array();
    jsonMap = getErrorConfDetails("Conf_page");
    setTimeout(function() {
        //	jsonMap=getErrorConfDetails("Conf_page");
        $.ajax({
            url: "/FullPageScreenshots/",
            success: function(data) {
                // debugger;							

                for (var i = 0; i < $(data).find('li >a').length; i++) {
                    var elem = $(data).find('li >a')[i];
                    fileNames.push(elem.innerHTML);
                }

                for (var i = 0; i < fileNames.length; i++) {
                    var num = i + 1;
                    var pageNum = "page" + num;
                    pageNumber = pageNumber + i;
                    imageloop(fileNames[i], pageNum)
                };

                $('a[id^="page"]').on('click', function() {
                    // debugger;
                    //	alert($(this).attr('id'));
                    var getValidationPage = $(this).attr('id');

                    var getImageName = $('#' + getValidationPage).find('img').attr("src");

                    //getImageRepresentation(getValidationPage)
                    sessionStorage.setItem("validationPage", getValidationPage);
                    sessionStorage.setItem("imgaePath", getImageName);
                    setSessionStorageOnImageClick(jsonMap, getValidationPage);
                    window.location.href = "HomePage_Description.html";

                });
            }
        });


    }, 100);

    // Get Home Page Images 



};

async function setSessionStorageOnImageClick(jsonMap, getValidationPage, falsePositive, ignoreCountJson, contentFlag) {
    if (contentFlag) {
        $.each(jsonMap, function(key, value) {
            console.log(key);
            let fontCount = jsonMap[key];
            if (fontCount > 0 && fontCount !== null) {
                sessionStorage.setItem("FontValidation", "true");
            }
        });

    } else {
        jsonMap = await getServerJsonMap(jsonMap, "Conf_page");
        jsonMap.forEach(async(value, key) => {
            var pageKey = key;
            //console.log('Page Name :',key +' Details :',value);
            if (pageKey === getValidationPage) {
                value = falsePositive ? value[ignoreCountJson] : value;
                await $.each(value, function(key, value) {
                    if (key === "AspectRatioaredifferent") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key.includes("PositionAlignmentError")) {

                        sessionStorage.setItem("PositionAlignmentError", "true");
                    }
                    if (key === "Image-BrokenLink") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "CasesensitiveError") {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key === "PlpToPdpComparison") {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key.includes("TextMismatch")) {

                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "SizeDifference") {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key.includes("OverLapError-REPEATEDCARD")) {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key.includes("OverlapError-REPEATEDCARD-AIML")) {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key.includes("LinkNotWorking")) {
                        sessionStorage.setItem(key, "true");
                    }

                    if (key === "Imageisoflowquality") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "SpacingError-FORM") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "Image-NotLoaded") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "OverFlowError-REPEATEDCARD") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "Videoplayissue") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "Carouselissue") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "InteractiveMenu") {
                        sessionStorage.setItem("InteractiveMenu", "true");
                    }
                    if (key === "Downloadissue") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "spellError") {
                        sessionStorage.setItem(key, "true");
                    }
                    if (key === "Accordion") {
                        sessionStorage.setItem(key, "true");
                    }
                    if(key === "spellError")
			    	{
				    	sessionStorage.setItem(key,"true" );
			    	}
              if (key === "Hamburger")
				{
				    sessionStorage.setItem(key, "true");
                }
                });
            }
        });
    }

}

function getConfDetailsView(jsonMap) {
    jsonMap.forEach((value, key) => {
        var pageKey = key;
        //console.log('Page Name :',key +' Details :',value);
        $.each(value, function(key, value) {
            if (key === "Error Count") {
                var errorDetail = "Total Error :" + value
                console.log(pageKey + " " + errorDetail);
                sessionStorage.setItem(pageKey, errorDetail);
            }
            if (key === "pageUrl") {
                var Title = value;
                var pageUrlKey = pageKey + "_pageUrl";
                console.log(pageUrlKey + " " + Title);
                sessionStorage.setItem(pageUrlKey, Title);
            }


        });
    });
}

function getErrorConfDetails(validationConfName) {
    var validationName = validationConfName;


    var jsonObj = [];
    var map1 = new Map();
    $.getJSON("/jsonFile/ReportJson.json", function(obj) {
        $.each(obj, function(key, val) {

            var jsonItem = {};
            //console.log("key : "+key+" ; value : "+val);
            if (key.includes(validationName)) {


                var errorName = key;
                errorName = errorName.split('Conf_');
                console.log("The Key is ", errorName[1]);

                jsonItem = {};
                $.each(val, function(key, val) {

                    jsonItem[key] = val;

                    //console.log(key +" "+val);


                })
                map1.set(errorName[1], jsonItem);
                getConfDetailsView(map1);
                //console.log(map1);


            }

        })




    });

    return map1;
}





//dynamically image appending section in home page

function imageloop(name, pageNum) {


    //$("<img />").attr('src', dir + name).appendTo("#imagesList");
    if (name === null) {
        $('#imagesList').append('<li>No Image Found</li>');
    } else {
        var errorDetails = sessionStorage.getItem(pageNum);
        var url = pageNum + "_pageUrl";
        var pageUrl = sessionStorage.getItem(url);
        if (errorDetails === null) {
            errorDetails = "No value Loaded";
        }
        if (pageUrl === null) {
            pageUrl = "No URL  Loaded";
        }
        $('#imagesList').append('<div id="pageNext" class="gallery"><a id=' + pageNum + '><img  id="id_img" src="' + dir + name + '" width="500" height="400" /></a> <div class="desc"> ' + errorDetails + '</div><div class="desc"><a href="' + pageUrl + '" target="_blank"><span>' + pageUrl + '</span></a> </div></div>');
        //$('#imagesList').append('<div class="gallery"><li>  <a id='+pageNum+' target="_blank" href="'+dir + name+'"><img  src="' +dir + name + '" /></a></li> </div>'); 
    }

}

function openFile(file) {
    // debugger;
    var extension = file.substr((file.lastIndexOf('.') + 1));
    switch (extension) {

        case 'png':

            return true;
            break;
        default:
            return false;
    }
}

function getServerJsonMap(obj, validationName) {

    var map1 = new Map();
    $.each(obj, function(key, val) {

        var jsonItem = {};
        //console.log("key : "+key+" ; value : "+val);
        try {
            if (key.includes(validationName)) {


                var errorName = key;
                errorName = errorName.split('Conf_');
                console.log("The Key is ", errorName[1]);

                jsonItem = {};
                $.each(val, function(key, val) {

                    jsonItem[key] = val;

                    //console.log(key +" "+val);


                })
                map1.set(errorName[1], jsonItem);
                getConfDetailsView(map1);
                //console.log(map1);


            }
        } catch (error) {
            console.error;
        }

    })
    return map1;
}