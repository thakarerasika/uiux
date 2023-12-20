var jsonDocument;
var jsonObjForEachCategory = [];
var errorCaption;
//jsonKey ==> page key

function setImagePath(imagePath) {
    $("#InputImage").attr('src', imagePath);
    // $('.parentContaine').mCustomScrollbar({ theme: 'dark-3' });
    $("#next").hide();
    $("#prev").hide();

};

function setImagePath2(imagePath) {
    $("#fontImage").attr('src', imagePath);

    //  $('.childContainer').mCustomScrollbar({ theme: 'dark-3' });
    $("#next").show();
    $("#prev").show();

};



async function onViewIgnore() {

    $('.overlaye').hide();
    $('.boxe').hide();
    $("#InputImage").show();
    $("#imageCanvas").hide();
};


async function onSwitchReport(isFullreport) {

    if (isFullreport == true) {
        $('.FullPage').hide();
        $('.issuePage').show();

    } else {
        $('.FullPage').show();
        $('.issuePage').hide();
        $("#InputImage").show();


    }
};



async function setInitialParamaters(obj, jsonKey, imagePath, _validationName, ignoredIssue, IgnoredKey) {
    //await setValidationList();
    //Position Alignment Error

    // $('.parentContaine').mCustomScrollbar({ theme: 'dark-3', horizontalScroll: true, advanced: { updateOnContentResize: true, updateOnBrowserResize: true }, axis: "yx" });
    $('#id_BSAlert').addClass('show');


    jsonDocument = obj;
    await _getErrorConfDetails("Conf_page", jsonDocument);



    // var errorCaption;
    var validationName;
    //$("#InputImageHide").hide();

    console.log("Page Num ", jsonKey);
    var jsonObj = [];

    //$(this).find('li:visible:first').click();

    //$('input.checkbox').click(function(){
    /* if($("input[name='validationCheckBoxes']").is(':checked'))
    { */
    jsonObj = [];
    counter = -1;
    validationName = _validationName;

    if (validationName === "Image-BrokenLink") {
        errorCaption = "Image-BrokenLink";
        //validationName="Image-BrokenLink";
    }

    if (validationName === "PositionAlignmentError") {
        errorCaption = "PositionAlignmentError";
        //validationName="Image-BrokenLink";
    }

    if (validationName === "CasesensitiveError") {
        errorCaption = "CasesensitiveError";
        //validationName="Image-BrokenLink";
    }

    if (validationName === "PlpToPdpComparison") {
        errorCaption = "PlpToPdpComparison";
    }

    if (validationName === "AspectRatioaredifferent") {
        errorCaption = "AspectRatioaredifferent";
        //validationName="Image-BrokenLink";
    }
    if (validationName === "TextMismatch-OCRValidation") {
        errorCaption = "TextMismatch";
        validationName = "TextMismatch-OCRValidation";
        //validationName="Image-BrokenLink";
    }
    if (validationName === "SizeDifference") {
        errorCaption = "pattern Difference";
        //validationName="Image-BrokenLink";
    }
    if (validationName === "OverLapError-REPEATEDCARD") {
        errorCaption = "OverLap";
        //validationName="Image-BrokenLink";

    }

    if (validationName === "OverlapError-REPEATEDCARD-AIML") {
        errorCaption = "Overlap";

    }

    if (validationName === "Imageisoflowquality") {
        errorCaption = "Image-LowQuality";
        //validationName="Image-BrokenLink";
        validationName = "Imageisoflowquality";
    }

    if (validationName === "LinkNotWorking") {
        errorCaption = "Link Not Working";
        validationName = "LinkNotWorking";
    }
    if (validationName === "SpacingError-FORM") {
        errorCaption = "Spacing Error";
        validationName = "SpacingError-FORM";
    }
    if (validationName === "Image-NotLoaded") {
        errorCaption = "Image Not Loaded";
        validationName = "Image-NotLoaded";
    }
    if (validationName === "OverFlowError-REPEATEDCARD") {
        errorCaption = "OverFlow";
        validationName = "OverFlowError-REPEATEDCARD";
    }
    if (validationName === "Videoplayissue") {
        errorCaption = "Videoplayissue";
    }
    if (validationName === "Carouselissue") {
        errorCaption = "Carousel issue";
    }
    if (validationName === "InteractiveMenu") {
        errorCaption = "Menu Hovering";
    }
    if (validationName === "Downloadissue") {
        errorCaption = "Downloadissue";
    }
    if (validationName === "Accordion") {
        errorCaption = "Accordion";
    }
    if (validationName === "spellError") {
        errorCaption = "spellError";
    }
    if (validationName === "Hamburger") {
        errorCaption = "Hamburger";
    }


    $("#next").show();
    // $("#prev").show();
    /* $('input.checkbox').not(this).prop('checked' ,false);
	
    $(this).attr('id');
    console.log($(this).attr('value')); */

    getImageRepresentationNew(validationName, jsonKey, jsonDocument, ignoredIssue, IgnoredKey).then(function(jsonObject) {
        jsonObj = jsonObject;
        jsonObjForEachCategory = jsonObject;
        setTimeout(function() {
            getSingleShotAllErrorRepresentation(jsonObjForEachCategory, errorCaption);

        }, 100);
    });



    //validationName=$(this).attr('value');
    //errorCaption=validationName;
    //$('#checkbox').is(':checked');
    //}


    //});
    // counter=-1;
    /* comment by komala */
    /*
    	$('#prev').click(function () {
    	
    			if(counter>0)
    			{
	
	
	
    				$('.overlaye').show();
    				$('.boxe').show();
    				var x; var y;var width;var height;
    				var errorDetails; 
    				counter = (counter - 1) % jsonObj.length; // increment your counter	// the modulus (%) operator resets the counter to 0
    				
    				errorDetails=
    				[
    					{x: parseInt(jsonObj[counter].x), y:parseInt(jsonObj[counter].y), width : parseInt(jsonObj[counter].width) ,height: parseInt(jsonObj[counter].height) }  
    					
    				];
    				
    				
    				var colorCode=validationName;
    				drawRectancle(errorDetails,errorCaption,colorCode);
    				counter >= 1 ? $("#prev").show() : $("#prev").hide();
    				setTimeout ( function() {
    					$.each(errorDetails, function( key, errorDetails ) {
    						
    						//console.log('x: ' + value.x + ' y: ' value.y +'width:'value.width +'height:'value.height);
    						highlight('#imageCanvasConatainer', {
    							
    							top:parseInt(errorDetails.y),
    							left: parseInt(errorDetails.x),
    							width: parseInt(errorDetails.width),
    							height: parseInt(errorDetails.height)
    							
    						});
    						
    					});
    				},100);
    				
    			}
    			else
    			{
    				$("#prev").hide();
    				//alert("please stop ...No more prev");
    				//$('#id_BSAlert').removeClass('show');
    			}
    		
    	});
    	*/
    /* commented by komala */

    //$("input[name='validationCheckBoxes']").on('change', function(e) {
    //if(!this.checked) {
    $('.overlaye').hide();
    $('.boxe').hide();
    var img_buffer = document.getElementById('InputImage');
    var ctx = document.getElementById("imageCanvas");
    var imgWidth = img_buffer.width;
    var imgHeight = img_buffer.height;
    ctx.width = imgWidth;
    ctx.height = imgHeight;


    counter = -1;

    var context = ctx.getContext('2d');
    context.drawImage(img_buffer, 0, 0);
    context.beginPath();


    //}

    /* else
    {
    	$('.overlaye').hide();
    	$('.boxe').hide();
    	var img_buffer = document.getElementById('InputImage');
    	var ctx=document.getElementById("imageCanvas");
    	var imgWidth=img_buffer.width;
    	var imgHeight=img_buffer.height;
    	ctx.width= imgWidth;
    	ctx.height=imgHeight;
    	
    	
    	
    	counter=-1;
    	
    	var context = ctx.getContext('2d');
    	context.drawImage(img_buffer,0,0);
    	context.beginPath();
    } */
    //});
    /* commented by komala */
    /*
    	$('#next').click(function () {
    			
	
    			if(counter !== jsonObj.length)
    			{
    				
    				$('.overlaye').show();
    				$('.boxe').show();
    				var x; var y;var width;var height;
    				var errorDetails; 
    				counter = (counter + 1) % jsonObj.length;
	
    				// increment your counter	// the modulus (%) operator resets the counter to 0
    				counter >= 1 ? $("#prev").show() : $("#prev").hide();
    				
    				
    				errorDetails=
    				[
    					{x: parseInt(jsonObj[counter].x), y:parseInt(jsonObj[counter].y), width : parseInt(jsonObj[counter].width) ,height: parseInt(jsonObj[counter].height) }  
    					
    				];
    				
    				console.log(jsonObj[counter]); 
    				console.log("hi ",errorDetails);
    				var colorCode=validationName;
    				drawRectancle(errorDetails,errorCaption,colorCode);
    				setTimeout ( function() {
    					$.each(errorDetails, function( key, errorDetails ) {
    						
    						//console.log('x: ' + value.x + ' y: ' value.y +'width:'value.width +'height:'value.height);
    						highlight('#imageCanvasConatainer', {
    							
    							top:parseInt(errorDetails.y),
    							left: parseInt(errorDetails.x),
    							width: parseInt(errorDetails.width),
    							height: parseInt(errorDetails.height)
    							
    						});
    						
    					});
    				},100);
    				
    			}
    			else
    			{
    				$("#next").hide();
    				//alert("please stop ...No more Next");
    			}
    		
    	}); */
    /* commented by komala */


    // var atLeastOneIsChecked = $('input[name="chk[]"]:checked').length > 0;

    /* $('#id_home').click(function (e) {
    	window.location.href = "homePage.html";
    	sessionStorage.clear();
    	
    }); */
};

async function setInitialParamatersForFontValidation(obj, jsonKey, ignoredIssue, IgnoredKey, report, colorCode, fontFamilyName, callType) {
    $('#id_BSAlert').addClass('show');
    console.log("Page Num ", jsonKey);
    var jsonObj = [];
    counter = -1;

    $("#next").show();

    getImageRepresentationForFont(obj, jsonKey, ignoredIssue, IgnoredKey, report, fontFamilyName).then(function(jsonObject) {

        jsonObj = jsonObject;
        jsonObjForEachCategory = jsonObject;
        setTimeout(function() {
            getSingleShotAllErrorRepresentationForFont(jsonObjForEachCategory, colorCode, callType);

        }, 100);
    });

    $('.overlaye').hide();
    $('.boxe').hide();
    var img_buffer = document.getElementById('fontImage');
    var ctx = document.getElementById("imageCanvas");
    var imgWidth = img_buffer.width;
    var imgHeight = img_buffer.height;
    ctx.width = imgWidth;
    ctx.height = imgHeight;


    counter = -1;

    var context = ctx.getContext('2d');
    context.drawImage(img_buffer, 0, 0);
    context.beginPath();

};


function getImageRepresentationNew(validationName, validationSubType, jsonDoc, ignoredIssue, IgnoredKey) {
    //  debugger;

    var validationName = validationName;

    return new Promise(function(resolve, reject) {



        var jsonObj = [];

        // <!-- if((validationName) === "Image-BrokenLink") -->
        // <!-- {  -->
        jsonDocument = jsonDoc;
        $.each(jsonDocument, function(key, val) {

            //console.log("key : "+key+" ; value : "+val);
            if ((key) === validationSubType) {
                $.each(val, function(key, val) {
                    var errorName = key;
                    var uniqueKey = key;
                    errorName = errorName.split('____');
                    console.log(errorName[0], "errorName[0]", key);

                    console.log(errorName[0].includes(validationName));
                    var jsonItem = {};
                    if ((errorName[0] === validationName || errorName[0].includes(validationName)) && val["isFalsePositive"] === ignoredIssue && val[IgnoredKey] === ignoredIssue) {
                        $.each(val, function(key, val) {

                            if (key === "X") {
                                //console.log(val)
                                jsonItem["x"] = val;
                            }

                            if (key === "Y") {
                                //console.log(val)
                                jsonItem["y"] = val;
                                y = val;
                            }
                            if (key === "offsetWidth") {
                                //console.log(val)
                                jsonItem["offsetWidth"] = val;
                                y = val;
                            }
                            if (key === "ElementText") {
                                //console.log(val)
                                jsonItem["ElementText"] = val;
                                y = val;
                            }

                            if (key === "offsetHeight") {
                                //console.log(val)
                                jsonItem["offsetHeight"] = val;
                                y = val;
                            }

                            if (key === "Width") {
                                //console.log(val)
                                jsonItem["width"] = val;
                                //width=val;
                            }

                            if (key === "Height") {
                                //height=val;
                                jsonItem["height"] = val;
                                //console.log(val)
                            }
                            if (key === "Locator") {
                                //height=val;
                                jsonItem["Locator"] = val;
                                //console.log(val)
                            }
                            if (key === "Locator CSS") {
                                //height=val;
                                jsonItem["Locator_CSS"] = val;
                                //console.log(val)
                            }
                            if (key === "isFalsePositive") {
                                //height=val;
                                jsonItem["isFalsePositive"] = val;
                                //console.log(val)
                            }

                            if (key === "Text") {
                                //height=val;
                                jsonItem["Text"] = val;
                                //console.log(val)
                            }
                            if (key === "text") {
                                //height=val;
                                jsonItem["text"] = val;
                                //console.log(val)
                            }

                            if (key === "CorrectedText") {
                                //height=val;
                                jsonItem["CorrectedText"] = val;
                                //console.log(val)
                            }

                            if (key === "ActualWord") {
                                //height=val;
                                jsonItem["ActualWord"] = val;
                                //console.log(val)
                            }

                            if (key === "PdpImageUrl") {
                                jsonItem["PdpImageUrl"] = val;
                            }

                            if (key === "PdpErrorText") {
                                jsonItem["PdpErrorText"] = val;
                            }

                            if (key === "ImageURL") {
                                //height=val;
                                jsonItem["ImageURL"] = val;
                                //console.log(val)
                            }

                            if (key === "LinkURL") {
                                //height=val;
                                jsonItem["url"] = val;
                                //console.log(val)
                            }
                            if (key === "CaseType") {
                                //height=val;
                                jsonItem["CaseType"] = val;
                                //console.log(val)
                            }
                            if (key === "ActualWidth") {
                                //height=val;
                                jsonItem["ActualWidth"] = val;
                                //console.log(val)
                            }
                            if (key === "ActualHeight") {
                                //height=val;
                                jsonItem["ActualHeight"] = val;
                                //console.log(val)
                            }

                            if (key === "WidthRatioDifference") {
                                //height=val;
                                jsonItem["WidthRatioDifference"] = val;
                                //console.log(val)
                            }
                            if (key === "HeightRatioDifference") {
                                //height=val;
                                jsonItem["HeightRatioDifference"] = val;
                                //console.log(val)
                            }



                            if (key === "ElementCategory") {
                                //height=val;
                                jsonItem["ElementCategory"] = val;
                                //console.log(val)
                            }
                            if (key === "Element1Text") {
                                //height=val;
                                jsonItem["Element1Text"] = val;
                                //console.log(val)
                            }
                            if (key === "Element2Text") {
                                //height=val;
                                jsonItem["Element2Text"] = val;
                                //console.log(val)
                            }
                            if (key === "IntersectionValueHeight") {
                                //height=val;
                                jsonItem["IntersectionValueHeight"] = val;
                                //console.log(val)
                            }
                            if (key === "IntersectionValueWidth") {
                                //height=val;
                                jsonItem["IntersectionValueWidth"] = val;
                                //console.log(val)
                            }
                            if (key === "LinkError") {
                                //height=val;
                                jsonItem["LinkError"] = val;
                                //console.log(val)
                            }
                            if (key === "PositionType") {
                                //height=val;
                                jsonItem["PositionType"] = val;
                                //console.log(val)
                            }

                            if (key === "scrollWidth") {
                                //height=val;
                                jsonItem["scrollWidth"] = val;
                                //console.log(val)
                            }

                            if (key === "scrollHeight") {
                                //height=val;
                                jsonItem["scrollHeight"] = val;
                                //console.log(val)
                            }
                            if (key === "ReferenceValue") {
                                //height=val;
                                jsonItem["ReferenceValue"] = val;
                                //console.log(val)
                            }

                            if (key === "ImageActualAspectRatio") {
                                //height=val;
                                jsonItem["ImageActualAspectRatio"] = val;
                                //console.log(val)
                            }
                            if (key === "ImageAspectRatio") {
                                //height=val;
                                jsonItem["ImageAspectRatio"] = val;
                                //console.log(val)
                            }

                            if (key === "RenderedWidth") {
                                //height=val;
                                jsonItem["RenderedWidth"] = val;
                                //console.log(val)
                            }
                            if (key === "RenderedHeight") {
                                //height=val;
                                jsonItem["RenderedHeight"] = val;
                                //console.log(val)
                            }
                            if (key === "parentLocator") {
                                //height=val;
                                jsonItem["parentLocator"] = val;
                                //console.log(val)
                            }
                            if (key === "LinkStatus") {
                                jsonItem["Status"] = val;
                            }
                            if (key === "PDP_Link") {
                                jsonItem["PDPURL"] = val;
                            }
                            jsonItem["uniqueCategoryKey"] = uniqueKey;
                            // <!-- y=obj.Y; -->
                            // <!-- width=obj.Width; -->
                            // <!-- height=obj.Height; -->
                            //console.log(errorDetails);


                        })

                        jsonObj.push(jsonItem);
                    }

                })


            }
        })


        console.log("HEllO JSOn ", jsonObj);
        //console.log(jsonObj);							
        jsonObjForEachCategory = jsonObj;
        resolve(jsonObj);
    });

}

function getImageRepresentationForFont(validationName, validationSubType, ignoredIssue, IgnoredKey, jsonReport, fontFamilyName) {

    console.log(typeof(validationName))
    var validationName = validationName;

    return new Promise(function(resolve, reject) {

        var jsonObj = [];

        $.each(jsonReport, function(key, val) {

            //console.log("key : "+key+" ; value : "+val);
            if ((key) === validationSubType) {

                validationName.forEach(function(item, index) {
                    var elementLevelJson = val[item];

                    console.log(item, index);

                    var jsonItem = {};
                    if (elementLevelJson["isFalsePositive"] === ignoredIssue && elementLevelJson[IgnoredKey] === ignoredIssue) {

                        jsonItem["x"] = elementLevelJson['X'];

                        jsonItem["y"] = elementLevelJson['Y'];
                        y = elementLevelJson;

                        jsonItem["width"] = elementLevelJson['Width'];

                        jsonItem["height"] = elementLevelJson['Height'];

                        jsonItem["Locator"] = elementLevelJson['CSSSelector'];

                        jsonItem["isFalsePositive"] = elementLevelJson['isFalsePositive'];

                        jsonItem["uniqueCategoryKey"] = "FontValidation" + "____" + item;

                        jsonItem["fontFamilyName"] = fontFamilyName;


                        jsonObj.push(jsonItem);
                    }



                });



            }
        })


        console.log("Font Json ", jsonObj);
        //console.log(jsonObj);							


        jsonObjForEachCategory = jsonObj;
        resolve(jsonObj);
    });

}

function drawRectancle(errorDetails, errorCaption, colorCode) {
    //  debugger;
    var img_buffer = document.getElementById('InputImage');
    //img_buffer.onload = function() {

    //$( "#" + IDofObject + " img" ).doSomething();

    var ctx = document.getElementById("imageCanvas");
    $("#InputImage").hide();
    var imgWidth = img_buffer.width;
    var imgHeight = img_buffer.height;
    ctx.width = imgWidth;
    ctx.height = imgHeight;


    var context = ctx.getContext('2d');
    context.drawImage(img_buffer, 0, 0);
    context.beginPath();
    //context.rect(282, 282, 260, 468);
    //context.rect(543, 282, 261, 468);
    var x = 0;
    var y = 0;
    var height = 0;
    var width = 0;

    $.each(errorDetails, function(key, value) {
        //console.log('x: ' + value.x + ' y: ' value.y +'width:'value.width +'height:'value.height);
        context.rect(parseInt(value.x), parseInt(value.y), parseInt(value.width), parseInt(value.height)); //footer
        x = parseInt(value.x);
        y = parseInt(value.y);
        width = value.width;
        height = value.height;

    });

    // context.rect(803, 282, 260, 468);



    context.lineWidth = 0;
    context.strokeStyle = 'red';
    context.stroke();
    //	alert(x+" :"+y)
    context.font = "bold 16px Arial";
    //context.fillStyle = "#ff0000";
    if (colorCode === "PositionAlignmentError") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Image Not Loaded") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "OverLap") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Overlap") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "pattern Difference") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Image-BrokenLink") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "AspectRatioaredifferent") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "CasesensitiveError") {

        context.fillStyle = "#FF0000";

    }

    if (colorCode === "PlpToPdpComparison") {
        context.fillStyle = "#FF0000";
    }

    if (colorCode === "TextMismatch") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Link Not Working") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Image-LowQuality") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Spacing Error") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "OverFlow") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Videoplayissue") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Carousel issue") {

        context.fillStyle = "#FF0000";

    }
    if (colorCode === "Menu Hovering") {
        context.fillStyle = "#FF0000";
    }
    if (colorCode === "Downloadissue") {
        context.fillStyle = "#FF0000";
    }
    // context.fillText(errorCaption, parseInt(x),parseInt(y)-10);

    if (colorCode === "FontValidation") {
        context.fillStyle = "#FF0000";
    }
    if (colorCode === "Accordion") {
        context.fillStyle = "#FF0000";
    }
    if (colorCode === "Hamburger") {
        context.fillStyle = "#FF0000";
    }


}

const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});


async function drawRectancleForFontValidation(fontFamilyMemberDetails, colorCode, executionMode) {
    jsonObjForEachCategory = fontFamilyMemberDetails;
    return new Promise(async function(resolve) {

        debugger;
        console.log(fontFamilyMemberDetails)
        var ctx = document.getElementById("imageCanvas");

        if (executionMode == false) {
            var img_buffer = document.getElementById('fontImage');
            $("#fontImage").hide();
        } else {
            var img_buffer = document.getElementById('InputImage');
            $("#InputImage").hide();

        }
        await delay(2000);
        var imgWidth = img_buffer.width;
        var imgHeight = img_buffer.height;
        ctx.width = imgWidth;
        ctx.height = imgHeight;


        var context = ctx.getContext('2d');
        context.drawImage(img_buffer, 0, 0);
        context.beginPath();

        var x = 0;
        var y = 0;
        var height = 0;
        var width = 0;



        //for(let errorDetails of fontFamilyMemberDetails)
        for (let index = 0; index < fontFamilyMemberDetails.length; index++) {
            const errorDetails = fontFamilyMemberDetails[index];
            context.lineWidth = 3;
            context.setLineDash([4, 4]);
            context.strokeStyle = colorCode;
            context.font = "bold 16px Arial";
            context.rect(parseInt(errorDetails.X), parseInt(errorDetails.Y), parseInt(errorDetails.Width), parseInt(errorDetails.Height));
            context.stroke();
            x = parseInt(errorDetails.X);
            y = parseInt(errorDetails.Y);
            width = errorDetails.Width;
            height = errorDetails.Height;
            context.fillStyle = "#FF0000";

            await new Promise(r => setTimeout(r, 0.5));

            if ((index + 1) >= fontFamilyMemberDetails.length) {
                resolve(true);
            }
        }

    });



}


var highlight = function(sel, info) {
    var w = $(sel).width();
    var h = $(sel).height();
    $(sel + ' .boxe').css({
        top: info.top + 'px',
        left: info.left + 'px',
        width: info.width + 'px',
        height: info.height + 'px',
        opacity: 1
    });
    $(sel + ' .overlaye-a').css({
        top: 0 + 'px',
        left: 0 + 'px',
        right: 0 + 'px',
        bottom: (h - info.top) + 'px',
    });
    $(sel + ' .overlaye-b').css({
        top: info.top + 'px',
        left: 0 + 'px',
        right: (w - info.left) + 'px',
        bottom: 0 + 'px'
    });
    $(sel + ' .overlaye-c').css({
        top: info.top + 'px',
        left: (info.left + info.width) + 'px',
        right: 0 + 'px',
        bottom: 0 + 'px'
    });
    $(sel + ' .overlaye-d').css({
        top: (info.top + info.height) + 'px',
        left: info.left + 'px',
        right: (w - info.left - info.width) + 'px',
        bottom: 0 + 'px'
    });

}

function getSingleShotAllErrorRepresentation(jsonObj, errorCaption) {
    // debugger
    if (isNullAndUndef(jsonObj)) {

        var img_buffer = document.getElementById('InputImage');
        var ctx = document.getElementById("imageCanvas");
        $("#InputImage").hide();

        var imgWidth = img_buffer.width;
        var imgHeight = img_buffer.height;
        ctx.width = imgWidth;
        ctx.height = imgHeight;

        $("#imageCanvas").show();
        var colorCode = errorCaption;
        var context = ctx.getContext('2d');
        context.drawImage(img_buffer, 0, 0);
        context.beginPath();

        $.each(jsonObj, function(key, val) {

            var jsonItem = {};
            //var jsonOb = [];
            $.each(val, function(key, val) {
                if (key === "x") {
                    jsonItem["x"] = val;
                }
                if (key === "y") {
                    jsonItem["y"] = val;

                }
                if (key === "width") {
                    jsonItem["width"] = val;
                }
                if (key === "height") {
                    jsonItem["height"] = val;
                }



            })
            var x = 0;
            var y = 0;
            var height = 0;
            var width = 0;
            //jsonOb.push(jsonItem);
            $.each(jsonItem, function(key, value) {



                if (key === "x") {
                    x = val.x;
                }
                if (key === "y") {
                    y = val.y;

                }
                if (key === "width") {
                    width = val.width;
                }
                if (key === "height") {
                    height = val.height;
                }

            });
            context.rect(parseInt(x), parseInt(y), parseInt(width), parseInt(height));
            //console.log(jsonOb);

            context.lineWidth = 0;
            context.strokeStyle = 'red';
            context.stroke();
            context.font = "bold 16px Arial";
            if (colorCode === "PositionAlignmentError") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "OverLap") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "Overlap") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "CasesensitiveError") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "PlpToPdpComparison") {
                context.fillStyle = "#FF0000";
            }

            if (colorCode === "AspectRatioaredifferent") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "Image-BrokenLink") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "TextMismatch") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "pattern Difference") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "Link Not Working") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "Image-LowQuality") {

                context.fillStyle = "#FF0000";

            }

            if (colorCode === "Spacing Error") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "Image Not Loaded") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "OverFlow") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "Videoplayissue") {

                context.fillStyle = "#FF0000";

            }
            if (colorCode === "Carousel issue") {
                context.fillStyle = "#FF0000";
            }

            if (colorCode === "Menu Hovering") {
                context.fillStyle = "#FF0000";
            }

            if (colorCode === "Downloadissue") {
                context.fillStyle = "#FF0000";
            }

            if (colorCode === "Accordion") {
                context.fillStyle = "#FF0000";
            }
            // context.fillText(errorCaption, parseInt(x), parseInt(y) - 10);
            if (colorCode === "spellError") {
                context.fillStyle = "#FF0000";
            }
            if (colorCode === "Hamburger") {
                context.fillStyle = "#FF0000";
            }
        })
    } else {
        // alert("No Errors to view ");

    }
}

function getSingleShotAllErrorRepresentationForFont(jsonObj, colorCode, executionMode) {

    if (isNullAndUndef(jsonObj)) {
        if (executionMode == false) {
            var img_buffer = document.getElementById('fontImage');
            $("#fontImage").hide();
        } else {
            var img_buffer = document.getElementById('InputImage');
            $("#InputImage").hide();

        }
        var ctx = document.getElementById("imageCanvas");

        var imgWidth = img_buffer.width;
        var imgHeight = img_buffer.height;
        ctx.width = imgWidth;
        ctx.height = imgHeight;

        $("#imageCanvas").show();
        var colorCode = colorCode;
        var context = ctx.getContext('2d');
        context.drawImage(img_buffer, 0, 0);
        context.beginPath();

        $.each(jsonObj, function(key, val) {
            var x = val.x;
            var y = val.y;
            var height = val.height;
            var width = val.width;
            context.rect(parseInt(x), parseInt(y), parseInt(width), parseInt(height));
            //console.log(jsonOb);			
            context.lineWidth = 0;
            //context.strokeStyle = colorCode;

            context.stroke();
            context.strokeStyle = colorCode;
            context.fillStyle = colorCode;
            context.font = "bold 16px Arial";

        });

    }
}

function isNullAndUndef(variable) {

    return (variable !== null && variable !== undefined && variable.length != 0);
}

function setValidationList() {
    var positionKey = sessionStorage.getItem("PositionAlignmentError");
    var imageKey = sessionStorage.getItem("Image-BrokenLink");
    var caseKey = sessionStorage.getItem("CasesensitiveError");

    var retailImageKey = sessionStorage.getItem("PlpToPdpComparison");

    var aspectRatioKey = sessionStorage.getItem("AspectRatioaredifferent");
    var overLapKey = sessionStorage.getItem("OverLapError-REPEATEDCARD");
    var overLapKey = sessionStorage.getItem("OverlapError-REPEATEDCARD-AIML");
    var ocrKey = sessionStorage.getItem("TextMismatch-OCRValidation");
    var sizeDiffernceKey = sessionStorage.getItem("SizeDifference");
    var sizeBrokenLinkKey = sessionStorage.getItem("LinkNotWorking");
    var sizeImageLowQuality = sessionStorage.getItem("Imageisoflowquality");
    var sapcingErrorForm = sessionStorage.getItem("SpacingError-FORM");
    var keyImageNotLoaded = sessionStorage.getItem("Image-NotLoaded");
    var keyOverFlow = sessionStorage.getItem("OverFlowError-REPEATEDCARD");
    var keyVideo = sessionStorage.getItem("Videoplayissue");
    var keyCarousel = sessionStorage.getItem("Carouselissue");
    var keyMenuHover = sessionStorage.getItem("InteractiveMenu");
    var keyDownload = sessionStorage.getItem("Downloadissue");
    var keyAccordion = sessionStorage.getItem("Accordion");
    var keySpellError = sessionStorage.getItem("spellError");
    var keyHamburger = sessionStorage.getItem("Hamburger");
    if (positionKey === "true") {
        $('#id_PositionAlignment').show();
    } else {
        $('#id_PositionAlignment').hide();
    }
    if (imageKey === "true") {
        $('#id_ImageBrokenLink').show();
    } else {
        $('#id_ImageBrokenLink').hide();
    }

    if (caseKey === "true") {
        $('#id_CaseSensitive').show();

    } else {
        $('#id_CaseSensitive').hide();
    }

    if (retailImageKey === "true") {
        $('#id_PlpToPdpComparison').show();
    } else {
        $('#id_PlpToPdpComparison').hide();
    }

    if (aspectRatioKey === "true") {
        $('#id_AspectRatio').show();
    } else {
        $('#id_AspectRatio').hide();
    }

    if (overLapKey === "true") {
        $('#id_OverLap').show();

    } else {
        $('#id_OverLap').hide();
    }
    if (ocrKey === "true") {
        $('#id_OCR').show();

    } else {
        $('#id_OCR').hide();
    }

    if (sizeDiffernceKey === "true") {
        $('#id_SizeDifference').show();

    } else {
        $('#id_SizeDifference').hide();
    }

    if (sizeBrokenLinkKey === "true") {
        $('#id_BrokenLink').show();

    } else {
        $('#id_BrokenLink').hide();
    }
    if (sizeImageLowQuality === "true") {
        $('#id_ImageLowQuality').show();

    } else {
        $('#id_ImageLowQuality').hide();
    }

    if (sapcingErrorForm === "true") {
        $('#id_spacingform').show();

    } else {
        $('#id_spacingform').hide();
    }

    if (keyImageNotLoaded === "true") {
        $('#id_ImageNotLoaded').show();

    } else {
        $('#id_spacingform').hide();
    }
    if (keyOverFlow === "true") {
        $('#id_ImageOverFlow').show();

    } else {
        $('#id_ImageOverFlow').hide();
    }
    if (keyVideo === "true") {
        $('#id_videoIssue').show();

    } else {
        $('#id_videoIssue').hide();
    }
    if (keyCarousel === "true") {
        $('#id_carouselIssue').show();

    } else {
        $('#id_carouselIssue').hide();
    }
    if (keyMenuHover === "true") {
        $('#id_MenuHover').show();
    } else {
        $('#id_MenuHover').hide();
    }

    if (keyDownload === "true") {
        $('#id_downloadIssue').show();
    } else {
        $('#id_downloadIssue').hide();
    }

    if (keyAccordion === "true") {
        $('#id_accordion').show();
    } else {
        $('#id_accordion').hide();
    }
    if (keySpellError === "true") {
        $('#id_spellError').show();
    } else {
        $('#id_spellError').hide();
    }
    if (keyHamburger === "true") {
        $('#id_hamburger').show();
    } else {
        $('#id_hamburger').hide();
    }

}

function _getErrorConfDetails(validationConfName, jsonDocument) {
    // debugger;
    var validationName = validationConfName;


    var jsonObj = [];
    var map1 = new Map();

    $.each(jsonDocument, function(key, val) {

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
            _getConfDetailsView(map1);
            //console.log(map1);


        }

    })



}

function _getConfDetailsView(jsonMap) {
    // debugger;
    jsonMap.forEach((value, key) => {
        var pageKey = key;
        //console.log('Page Name :',key +' Details :',value);
        $.each(value, function(key, value) {

            if (key.includes("CasesensitiveError")) {
                $('#spn_CaseSensitive').text("(" + value + ")");
            }

            if (key.includes("PlpToPdpComparison")) {
                $('#spn_PlpToPdpComparison').text("(" + value + ")");
            }

            if (key.includes("PositionAlignmentError")) {
                $('#spn_PositionAlignment').text("(" + value + ")");
            }
            if (key.includes("Image-BrokenLink")) {
                $('#spn_ImageBrokenLink').text("(" + value + ")");
            }
            if (key.includes("AspectRatioaredifferent")) {
                $('#spn_AspectRatio').text("(" + value + ")");
            }
            if (key.includes("TextMismatch")) {
                $('#spn_OCR').text("(" + value + ")");
            }
            if (key.includes("SizeDifference")) {
                $('#spn_SizeDifference').text("(" + value + ")");
            }
            if (key.includes("OverLapError")) {
                $('#spn_OverLap').text("(" + value + ")");
            }
            if (key.includes("OverlapError")) {
                $('#spn_OverLap_AIML').text("(" + value + ")");
            }

            if (key.includes("LinkNotWorking")) {
                $('#spn_BrokenLink').text("(" + value + ")");
            }

            if (key.includes("Imageisoflowquality")) {
                $('#spn_ImageLowQuality').text("(" + value + ")");
            }

            if (key.includes("SpacingError-FORM")) {
                $('#spn_spacingform').text("(" + value + ")");
            }

            if (key.includes("Image-NotLoaded")) {
                $('#spn_ImageNotLoaded').text("(" + value + ")");
            }
            if (key.includes("OverFlowError-REPEATEDCARD")) {
                $('#spn_ImageOverFlow').text("(" + value + ")");
            }
            if (key.includes("Videoplayissue")) {
                $('#spn_videoIssue').text("(" + value + ")");
            }
            if (key.includes("Carouselissue")) {
                $('#spn_carouselIssue').text("(" + value + ")");
            }

            if (key.includes("Interactive Menu")) {
                $('#spn_MenuHoveringIssue').text("(" + value + ")");
            }

            if (key.includes("Downloadissue")) {
                $('#spn_downloadIssue').text("(" + value + ")");
            }
            if (key.includes("Accordion")) {
                $('#spn_accordion').text("(" + value + ")");
            }
            if (key.includes("spellError")) {
                $('#spn_spellError').text("(" + value + ")");
            }

            if (key.includes("Accordion")) {
                $('#spn_accordion').text("(" + value + ")");
            }
            if (key.includes("Hamburger")) {
                $('#spn_hamburger').text("(" + value + ")");
            }

        });
    });
}

async function timeOutFnPrevNext(errorDetails) {
    $('.overlaye').show();
    $('.boxe').show();
    setTimeout(function() {
        $.each(errorDetails, function(key, errorDetail) {
            // debugger


            var containerWidth = document.getElementById("imageCanvasConatainer").clientWidth;
            var containerHeight = document.getElementById("imageCanvasConatainer").clientHeight;
            var img_buffer = document.getElementById('InputImage');
            console.log(errorDetails, "errorDetails", img_buffer.width, containerWidth)
            var widthRatio = (containerWidth / img_buffer.naturalWidth);
            var heightRatio = (containerHeight / img_buffer.naturalHeight);
            highlight('#imageCanvasConatainer', {

                top: parseInt(errorDetail.y * (widthRatio)),
                left: parseInt(errorDetail.x * (widthRatio)),
                width: parseInt(errorDetail.width * (widthRatio)),
                height: parseInt(errorDetail.height * (heightRatio))

            });
        });
    }, 100);

}

var toggler = document.getElementsByClassName("care");

var i;


for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("care-down");

    });
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


async function getSingleShotErrorForSpellRepresentation(jsonObj, errorCaption, executionMode) {
    return new Promise(async function(resolve) {
        var spellObj = [];
        if (isNullAndUndef(jsonObj)) {

            if (executionMode == false) {
                var img_buffer = document.getElementById('fontImage');
                $("#fontImage").hide();
            } else {
                var img_buffer = document.getElementById('InputImage');
                $("#InputImage").hide();

            }

            var ctx = document.getElementById("imageCanvas");
            await delay(2000);

            var imgWidth = img_buffer.width;
            var imgHeight = img_buffer.height;
            ctx.width = imgWidth;
            ctx.height = imgHeight;

            $("#imageCanvas").show();
            var colorCode = errorCaption;
            var context = ctx.getContext('2d');
            context.drawImage(img_buffer, 0, 0);
            context.beginPath();


            $.each(jsonObj, function(key, val) {
                if (key.includes('spellError')) {

                    var jsonItem = val;
                    //var jsonOb = [];
                    spellObj.push(jsonItem);

                    var x = val.X;
                    var y = val.Y;
                    var height = val.Height;
                    var width = val.Width;

                    context.rect(parseInt(x), parseInt(y), parseInt(width), parseInt(height));


                    context.lineWidth = 0;
                    context.strokeStyle = 'red';
                    context.stroke();
                    context.font = "bold 16px Arial";
                    if (colorCode === "spellError") {
                        context.fillStyle = "#FF0000";
                    }


                }

            });

        } else {
            // alert("No Errors to view ");
        }
        resolve(spellObj);
    });
}

async function setInitialParamatersForSpellValidation(spellObj) {

    jsonObjForEachCategory = spellObj;

};