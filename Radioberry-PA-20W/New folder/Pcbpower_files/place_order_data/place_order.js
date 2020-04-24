var PLACEORDER = {

    //restrictedWorkingDaysMsg: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictedWdaysMsg"].ToString() %>',
    //restrictedWdaysMsgForML4: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictedWdaysMsgForML4"].ToString() %>',
    //RestrictSqMtrText: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictSqMtrText"].ToString() %>',

    //RestrictSqMtrText_g1: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictSqMtrText_g1"].ToString() %>',
    //RestrictSqMtrText_g2: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictSqMtrText_g2"].ToString() %>',
    ////MSG_Blocked_Customer: '<%= System.Configuration.ConfigurationManager.AppSettings["MSG_Blocked_Customer"].ToString() %>',
    //MSG_Blocked_Customer: 'This functionality is not available for your account right now. Please contact us at +917600012414/15 or at pcb@pcbpower.com. We regret the inconvenience.',
    //RestrictMultiLayersFor3And5Wdays: '<%= System.Configuration.ConfigurationManager.AppSettings["RestrictMultiLayersFor3And5Wdays"].ToString() %>',
    restrictedWorkingDaysMsg: '',
    restrictedWdaysMsgForML4: '',
    RestrictSqMtrText: '',

    RestrictSqMtrText_g1: '',
    RestrictSqMtrText_g2: '',
    //MSG_Blocked_Customer: '<%= System.Configuration.ConfigurationManager.AppSettings["MSG_Blocked_Customer"].ToString() %>',
    MSG_Blocked_Customer: 'This functionality is not available for your account right now. Please contact us at +917600012414/15 or at pcb@pcbpower.com. We regret the inconvenience.',
    RestrictMultiLayersFor3And5Wdays: '',


    init: function () {
        PLACEORDER.events();
    },
    DisableButtons: function () {
        //$('.btngenerateoffer').prop('enabled', false);
        $('.btnplaceorder').prop('enabled', false);
        //$('.btngenerateoffer').prop('disabled', true);
        $('.btnplaceorder').prop('disabled', true);
    },
    EnableButtons: function () {
        //$('.btngenerateoffer').prop('disabled', false);
        $('.btnplaceorder').prop('disabled', false);
        //$('.btngenerateoffer').prop('enabled', true);
        $('.btnplaceorder').prop('enabled', true);
    },

    FocusChangeColor: function () {
        $(".clsbordercolorcontrol").removeClass("pcbbackgroundcolorred");
        $(".clsbordercolorcontrol").addClass("pcbbackgroundcolorgreen");
    },
    CheckPCBNameBorderColor: function () {

        var validationflag = false;
        var txtPCBName = $('.clsPCBName').val().trim();
        if (txtPCBName == '' || txtPCBName == undefined || txtPCBName == null) {
            $(".clsbordercolorcontrol").removeClass("pcbbackgroundcolorgreen");
            $(".clsbordercolorcontrol").addClass("pcbbackgroundcolorred");
            PLACEORDER.DisableButtons();
            validationflag = true;
        }
        else {
            $(".clsbordercolorcontrol").removeClass("pcbbackgroundcolorred");
            $(".clsbordercolorcontrol").addClass("pcbbackgroundcolorgreen");
            PLACEORDER.EnableButtons();
        }
        if ($("#ctl00_ContentPlaceHolder1_RRBsingleboardNew").prop('checked') == true) {
            var boardsizex = $('.clsbordercolorcontrol1').val().trim();
            if (boardsizex == '' || boardsizex == undefined || boardsizex == null) {
                $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
            else {
                var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                if (layer == 2180 || layer == 2181) {
                    if (boardsizex < 20 || boardsizex > 430) {
                        $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                        $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                        PLACEORDER.DisableButtons();
                        validationflag = true;
                    }
                    else {
                        $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorred");
                        $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorgreen");
                        PLACEORDER.EnableButtons();
                    }
                }
                else {
                    if (boardsizex < 20 || boardsizex > 415) {
                        $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                        $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                        PLACEORDER.DisableButtons();
                        validationflag = true;
                    }
                    else {
                        $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorred");
                        $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorgreen");
                        PLACEORDER.EnableButtons();
                    }
                }
            }

            var boardsizey = $('.clsbordercolorcontrol2').val().trim();
            if (boardsizey == '' || boardsizey == undefined || boardsizey == null) {
                $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
            else {
                var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                if (layer == 2180 || layer == 2181) {
                    if (boardsizey < 20 || boardsizey > 585) {
                        $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                        $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                        PLACEORDER.DisableButtons();
                        validationflag = true;
                    }
                    else {
                        $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorred");
                        $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorgreen");
                        PLACEORDER.EnableButtons();
                    }
                }
                else {
                    if (boardsizey < 20 || boardsizey > 565) {
                        $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                        $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                        PLACEORDER.DisableButtons();
                        validationflag = true;
                    }
                    else {
                        $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorred");
                        $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorgreen");
                        PLACEORDER.EnableButtons();
                    }
                }
            }
            var pcbquantity = $('.clsbordercolorcontrol3').val().trim();
            if (pcbquantity == '' || pcbquantity == undefined || pcbquantity == null) {
                $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorgreen");
                $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorred");
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
            else {
                $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorred");
                $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorgreen");
                PLACEORDER.EnableButtons();
            }
        }

        if ($("#ctl00_ContentPlaceHolder1_RRBPanelNew").prop('checked') == true) {
            if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").prop('checked') == false) {
                var boardsizex = $('.clsbordercolorcontrol1').val().trim();
                var powerpaneldimx = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNew').val().trim();
                var powerpaneldimy = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNew').val().trim();
                if (boardsizex == '' || boardsizex == undefined || boardsizex == null) {
                    $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (boardsizex < 5 || boardsizex > 430) {
                            $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (boardsizex < 5 || boardsizex > 415) {
                            $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol1").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol1").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                var boardsizey = $('.clsbordercolorcontrol2').val().trim();
                if (boardsizey == '' || boardsizey == undefined || boardsizey == null) {
                    $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (boardsizey < 5 || boardsizey > 585) {
                            $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (boardsizey < 5 || boardsizey > 565) {
                            $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol2").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol2").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                if (powerpaneldimx == '' || powerpaneldimx == undefined || powerpaneldimx == null) {
                    $(".clsbordercolorcontrol9").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol9").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (powerpaneldimx < 5 || powerpaneldimx > 430) {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").removeClass("pcbbackgroundcolorgreen");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").removeClass("pcbbackgroundcolorred");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (powerpaneldimx < 5 || powerpaneldimx > 415) {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").removeClass("pcbbackgroundcolorgreen");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").removeClass("pcbbackgroundcolorred");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimXNew").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                if (powerpaneldimy == '' || powerpaneldimy == undefined || powerpaneldimy == null) {
                    $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").removeClass("pcbbackgroundcolorgreen");
                    $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (powerpaneldimy < 5 || powerpaneldimy > 585) {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").removeClass("pcbbackgroundcolorgreen");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").removeClass("pcbbackgroundcolorred");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (powerpaneldimy < 5 || powerpaneldimy > 565) {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").removeClass("pcbbackgroundcolorgreen");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").removeClass("pcbbackgroundcolorred");
                            $("#ctl00_ContentPlaceHolder1_txtpaneldimYNew").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                var pcbquantity = $('.clsbordercolorcontrol3').val().trim();
                if (pcbquantity == '' || pcbquantity == undefined || pcbquantity == null) {
                    $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorred");
                    $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorgreen");
                    PLACEORDER.EnableButtons();
                }
                var pcbrepeatx = $('.clsbordercolorcontrol4').val().trim();
                if (pcbrepeatx == '' || pcbrepeatx == undefined || pcbrepeatx == null) {
                    $(".clsbordercolorcontrol4").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol4").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    $(".clsbordercolorcontrol4").removeClass("pcbbackgroundcolorred");
                    $(".clsbordercolorcontrol4").addClass("pcbbackgroundcolorgreen");
                    PLACEORDER.EnableButtons();
                }
                var pcbrepeaty = $('.clsbordercolorcontrol5').val().trim();
                if (pcbrepeaty == '' || pcbrepeaty == undefined || pcbrepeaty == null) {
                    $(".clsbordercolorcontrol5").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol5").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    $(".clsbordercolorcontrol5").removeClass("pcbbackgroundcolorred");
                    $(".clsbordercolorcontrol5").addClass("pcbbackgroundcolorgreen");
                    PLACEORDER.EnableButtons();
                }
            }
            else {
                var txtTotlaPCBBoardNewCust = $('.clsbordercolorcontrol6').val().trim();
                if (txtTotlaPCBBoardNewCust == '' || txtTotlaPCBBoardNewCust == undefined || txtTotlaPCBBoardNewCust == null) {
                    $(".clsbordercolorcontrol6").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol6").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    $(".clsbordercolorcontrol6").removeClass("pcbbackgroundcolorred");
                    $(".clsbordercolorcontrol6").addClass("pcbbackgroundcolorgreen");
                    PLACEORDER.EnableButtons();
                }
                var txtTotlaPaneldimxcust = $('.clsbordercolorcontrol7').val().trim();
                if (txtTotlaPaneldimxcust == '' || txtTotlaPaneldimxcust == undefined || txtTotlaPaneldimxcust == null) {
                    $(".clsbordercolorcontrol7").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol7").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (txtTotlaPaneldimxcust < 50 || txtTotlaPaneldimxcust > 430) {
                            $(".clsbordercolorcontrol7").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol7").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol7").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol7").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (txtTotlaPaneldimxcust < 50 || txtTotlaPaneldimxcust > 415) {
                            $(".clsbordercolorcontrol7").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol7").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol7").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol7").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                var txtTotlaPaneldimycust = $('.clsbordercolorcontrol8').val().trim();
                if (txtTotlaPaneldimycust == '' || txtTotlaPaneldimycust == undefined || txtTotlaPaneldimycust == null) {
                    $(".clsbordercolorcontrol8").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol8").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                    if (layer == 2180 || layer == 2181) {
                        if (txtTotlaPaneldimycust < 50 || txtTotlaPaneldimycust > 585) {
                            $(".clsbordercolorcontrol8").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol8").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol8").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol8").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                    else {
                        if (txtTotlaPaneldimycust < 50 || txtTotlaPaneldimycust > 565) {
                            $(".clsbordercolorcontrol8").removeClass("pcbbackgroundcolorgreen");
                            $(".clsbordercolorcontrol8").addClass("pcbbackgroundcolorred");
                            PLACEORDER.DisableButtons();
                            validationflag = true;
                        }
                        else {
                            $(".clsbordercolorcontrol8").removeClass("pcbbackgroundcolorred");
                            $(".clsbordercolorcontrol8").addClass("pcbbackgroundcolorgreen");
                            PLACEORDER.EnableButtons();
                        }
                    }
                }
                var pcbquantity = $('.clsbordercolorcontrol3').val().trim();
                if (pcbquantity == '' || pcbquantity == undefined || pcbquantity == null) {
                    $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorgreen");
                    $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorred");
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
                else {
                    $(".clsbordercolorcontrol3").removeClass("pcbbackgroundcolorred");
                    $(".clsbordercolorcontrol3").addClass("pcbbackgroundcolorgreen");
                    PLACEORDER.EnableButtons();
                }
            }
        }

        if ($("#ctl00_ContentPlaceHolder1_RRBAssemblyNo").prop('checked') == true) {
            var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
            var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
            if (len > 0) {
                var ext = file[0].name.split('.').pop().toLowerCase();
                if (ext == 'zip' || ext == 'rar') {
                    PLACEORDER.EnableButtons();
                }
                else {
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
            }
            else {
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
        }
        else {
            var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
            var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
            if (len > 0) {
                var ext = file[0].name.split('.').pop().toLowerCase();
                if (ext == 'zip' || ext == 'rar') {
                    PLACEORDER.EnableButtons();
                }
                else {
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
            }
            else {
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
            var file1 = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile')[0].files;
            var len1 = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').get(0).files.length;
            var ext1 = ''
            if (len1 > 0) {
                ext1 = file1[0].name.split('.').pop().toLowerCase();
                if (ext1 == 'xlsx' || ext1 == 'xls' || ext1 == 'csv' || ext1 == 'txt') {
                    PLACEORDER.EnableButtons();
                }
                else {
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
            }
            else {
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
            var file2 = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile')[0].files;
            var len2 = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').get(0).files.length;
            if (len2 > 0) {
                var ext2 = file2[0].name.split('.').pop().toLowerCase();
                if ((ext2 == 'xlsx' || ext2 == 'xls' || ext2 == 'csv') && (ext1 == 'xlsx' || ext1 == 'xls' || ext1 == 'csv' || ext1 == 'txt')) {
                    PLACEORDER.EnableButtons();
                }
                else {
                    PLACEORDER.DisableButtons();
                    validationflag = true;
                }
            }
            else {
                PLACEORDER.DisableButtons();
                validationflag = true;
            }
        }
        if (validationflag == true) {
            PLACEORDER.DisableButtons();
        }
        else {
            PLACEORDER.EnableButtons();
        }
    },

    hideworkingdayspersqmter: function (surfaceArea, oldDelTerm) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DeliveryDaysNew[data-val="3#333"]').show();
        $('.DeliveryDaysNew[data-val="5#334"]').show();
        $('.DeliveryDaysNew[data-val="7#529"]').show();
        $('.DeliveryDaysNew[data-val="10#1452"]').show();
        $('.DeliveryDaysNew[data-val="15#1453"]').show();
        $('.DeliveryDaysNew[data-val="20#7273"]').show();
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        var layer = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
        var delTerm = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();
        if (material == "FR4") {
            if (layer == 2180) { //Single
                if (surfaceArea > 0.7499 && surfaceArea <= 1) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                        PLACEORDER.setDeliveryDays('7#529');
                    }
                }
                else if (surfaceArea > 1 && surfaceArea <= 8) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    // $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                        PLACEORDER.setDeliveryDays('7#529');
                    }
                }
                //else if (surfaceArea > 2 && surfaceArea <= 3) {
                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    //$('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                //        PLACEORDER.setDeliveryDays('7#529');
                //    }
                //}
                //else if (surfaceArea > 3 && surfaceArea <= 8) {

                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                //        PLACEORDER.setDeliveryDays('7#529');

                //        PLACEORDER.setalternetpcbworkingday();
                //    }
                //}
            }
            else if (layer == 2181) { //Double
                if (surfaceArea > 0.7499 && surfaceArea <= 1) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                        PLACEORDER.setDeliveryDays('7#529');
                    }
                }
                else if (surfaceArea > 1 && surfaceArea <= 8) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    // $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    // $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                        PLACEORDER.setDeliveryDays('7#529');
                    }
                }
                //else if (surfaceArea > 2 && surfaceArea <= 3) {
                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    //$('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                //        PLACEORDER.setDeliveryDays('7#529');
                //    }
                //}
                //else if (surfaceArea > 3 && surfaceArea <= 8) {

                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                //        PLACEORDER.setDeliveryDays('7#529');

                //        PLACEORDER.setalternetpcbworkingday();
                //    }
                //}
            }
            else if (layer == 2183) { //ML4
                
                if (surfaceArea > 0 && surfaceArea <= 0.7499) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();

                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452').change();
                        }
                    }
                    else if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else
                    {
                        if (oldDelTerm == "3#333") {
                            PLACEORDER.setDeliveryDays('7#529');
                        }
                    }
                }
                else if (surfaceArea > 0.7499 && surfaceArea <= 3) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();

                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452').change();
                        }
                    }
                    else if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                            PLACEORDER.setDeliveryDays('7#529');
                        }
                    }




                }
                else if (surfaceArea > 3 && surfaceArea <= 6) {

                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    //$('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else
                    {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                            PLACEORDER.setalternetpcbworkingday();
                        }
                    }
                }
                else if (surfaceArea > 6 && surfaceArea <= 8)
                {

                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();

                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                        PLACEORDER.setDeliveryDays('15#1453');
                        PLACEORDER.setalternetpcbworkingday();
                    }
                }
            }
            else if (layer == 2184) { //ML6
                
                if (surfaceArea > 0 && surfaceArea <= 0.7499) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();

                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452').change();
                        }
                    }
                    else if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                            PLACEORDER.setDeliveryDays('7#529');
                            PLACEORDER.setalternetpcbworkingday();
                        }
                    }
                }
                else if (surfaceArea > 0.7499 && surfaceArea <= 1) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();

                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="3#333"]').hide();
                        $('.DeliveryDaysNew[data-val="5#334"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else
                    {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                            PLACEORDER.setalternetpcbworkingday();
                        }
                    }
                }
                else if (surfaceArea > 1 && surfaceArea <= 3) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                        PLACEORDER.setDeliveryDays('15#1453');
                    }
                }
                else if (surfaceArea > 3 && surfaceArea <= 8) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                        PLACEORDER.setDeliveryDays('20#7273');
                        PLACEORDER.setalternetpcbworkingday();
                    }
                }
                //else if (surfaceArea > 3 && surfaceArea <= 8) {

                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                //        PLACEORDER.setDeliveryDays('20#7273');
                //        PLACEORDER.setalternetpcbworkingday();
                //    }
                //}
            }
            else if (layer == 2185 || layer == 2198) { //ML8 to ML 10

                
                if (surfaceArea > 0 && surfaceArea <= 0.5) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();

                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                            PLACEORDER.setDeliveryDays('20#7273');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
                            PLACEORDER.setDeliveryDays('7#529');
                        }
                    }
                }
                else if (surfaceArea > 0.5 && surfaceArea <= 1) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453').change();
                        }
                    }
                    else if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="7#529"]').hide();
                        $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                            PLACEORDER.setDeliveryDays('20#7273');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                        }
                    }

                }
                else if (surfaceArea > 1 && surfaceArea <= 2)
                {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                            PLACEORDER.setDeliveryDays('20#7273');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273').change();
                        }
                    }
                    else
                    {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                        }
                    }

                }
                else if (surfaceArea > 2 && surfaceArea <= 8) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                        PLACEORDER.setDeliveryDays('20#7273');
                    }
                }

            }

            else if (layer == 2316) { //ML 12

                if (surfaceArea > 0 && surfaceArea <= 1) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                            PLACEORDER.setDeliveryDays('20#7273');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                            PLACEORDER.setDeliveryDays('10#1452');
                        }
                    }

                }
                else if (surfaceArea > 1 && surfaceArea <= 2) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();

                    var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
                    var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
                    var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
                    if (val_BlindBuriedVia != 'No') {
                        $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                        $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                            PLACEORDER.setDeliveryDays('20#7273');
                            $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                            $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273').change();
                        }
                    }
                    else {
                        if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                            PLACEORDER.setDeliveryDays('15#1453');
                        }
                    }

                }
                else if (surfaceArea > 2 && surfaceArea <= 8) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                        PLACEORDER.setDeliveryDays('20#7273');
                    }
                }
                //else if (surfaceArea > 3 && surfaceArea <= 8) {

                //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                //    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                //    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                //    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                //    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452") {
                //        PLACEORDER.setDeliveryDays('20#7273');
                //        PLACEORDER.setalternetpcbworkingday();
                //    }
                //}
            }
        }
        else if (material == "MCPCB") {
            if (layer == 2180) { //Single
                if (surfaceArea >= 0.5 && surfaceArea <= 0.9999) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    if (oldDelTerm == "3#333") {
                        PLACEORDER.setDeliveryDays('7#529');
                    }
                }
                else if (surfaceArea >= 1.000 && surfaceArea <= 1.9999) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
                        PLACEORDER.setDeliveryDays('10#1452');
                    }
                }
                else if (surfaceArea >= 2.000 && surfaceArea <= 2.9999) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529" || oldDelTerm == "10#1452" || oldDelTerm == "15#1453") {
                        PLACEORDER.setDeliveryDays('20#7273');
                    }
                }
            }
        }
        else {
            //$('.DeliveryDaysNew[data-val="15#1453"]').hide();
            $('.DeliveryDaysNew[data-val="20#7273"]').hide();
            $('.DeliveryDaysNew[data-val="25#7272"]').hide();
            if (oldDelTerm == "20#7273" || oldDelTerm == "25#7272")//if (oldDelTerm == "15#1453" || oldDelTerm == "21#7273" || oldDelTerm == "28#7272")
            {
                PLACEORDER.setDeliveryDays('7#529');
            }
        }
    },

    pageLoad_Language: function () {
        PLACEORDER.changeToolTip();
        PLACEORDER.hideDelTerm();
        if (document.getElementById('ctl00_ContentPlaceHolder1_RRBsingleboardNew').checked) {
            $("#lblQtyNew").html('PCB quantity');
        }

        if (document.getElementById("ctl00_ContentPlaceHolder1_RRBQtyUnit_0") != null) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                $("#lblQty").html('PCB quantity');
            } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                $("#lblQty").html('Panel quantity');
            }
            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                    $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                    $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                    $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                    $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                    $("#lblAssemblyComponent").html('Number of Components / PCB');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                    $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                    $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                    $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                    $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                    $("#lblAssemblyComponent").html('Number of Components / PCB');
                }

            }
            $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_0').change(function () {
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                    $("#lblQty").html('PCB quantity');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                    $("#lblQty").html('Panel quantity');
                }
            });
            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_0').change(function () {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                        $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                        $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    }
                });
            }
            $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_1').change(function () {
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                    $("#lblQty").html('PCB quantity');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                    $("#lblQty").html('Panel quantity');
                }
            });

            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_1').change(function () {
                    if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_0').checked) {
                        $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnit_1').checked) {
                        $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    }
                });
            }
        }

        if (document.getElementById("ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0") != null) {
            if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                $("#lblQtyNew").html('PCB quantity');
            } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                $("#lblQtyNew").html('Panel quantity');
            }
            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                    $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                    $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                    $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                    $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                    $("#lblAssemblyComponent").html('Number of Components / PCB');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                    $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                    $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                    $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                    $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                    $("#lblAssemblyComponent").html('Number of Components / PCB');
                }
            }


            $('#ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').change(function () {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_0').prop('checked', true);
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                    $("#lblQtyNew").html('PCB quantity');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                    $("#lblQtyNew").html('Panel quantity');
                }
            });
            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').change(function () {
                    $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_0').prop('checked', true);
                    if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                        $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                        $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    }
                });
            }


            $('#ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').change(function () {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_1').prop('checked', true);
                if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                    $("#lblQtyNew").html('PCB quantity');
                } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                    $("#lblQtyNew").html('Panel quantity ');
                }
            });
            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                $('#ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').change(function () {
                    $('#ctl00_ContentPlaceHolder1_RRBQtyUnit_1').prop('checked', true);
                    if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_0').checked) {
                        $("#lblAssemblyQty").html('Total PCB Assembly quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    } else if (document.getElementById('ctl00_ContentPlaceHolder1_RRBQtyUnitNew_1').checked) {
                        $("#lblAssemblyQty").html('Total Assembly Panel quantity');
                        $("#lblAssemblySMDComponents").html('Number of SMD Components / PCB');
                        $("#lblAssemblyHoleComponents").html('Number of Through Hole Components / PCB');
                        $("#lblAssemblyBgaTqfpComponents").html('Number of BGA/TQFP Components / PCB');
                        $("#lblAssemblyComponent").html('Number of Components / PCB');
                    }
                });
            }
        }
    },

    hideDelTerm: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var e = document.getElementById("ctl00_ContentPlaceHolder1_ddlDelTerms");
        var strUser = e.options[e.selectedIndex].value;
        var layer = document.getElementById("ctl00_ContentPlaceHolder1_ddlLayers");
        var checkLayer = layer.options[layer.selectedIndex].value;

        $("#ctl00_ContentPlaceHolder1_DDLsurfacefinish option[value='I']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlDelTerms option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlDelTerms option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlDelTerms option[value='7 to 8 weeks#7421']").remove();
        $('.DeliveryDaysNew[data-val="5 to 6 weeks#7419"]').hide();
        $('.DeliveryDaysNew[data-val="6 to 7 weeks#7420"]').hide();
        $('.DeliveryDaysNew[data-val="7 to 8 weeks#7421"]').hide();
        $('.MaterialNew[data-val="RT6002"]').hide();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='7 to 8 weeks#7429']").remove();

        //Live
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='5 to 6 weeks#7427']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='6 to 7 weeks#7428']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='7 to 8 weeks#7429']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm1 option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm2 option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm3 option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm4 option[value='7 to 8 weeks#7421']").remove();



        $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1 option[value='7 to 8 weeks#7421']").remove();

        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2 option[value='5 to 6 weeks#7419']").remove();
        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2 option[value='6 to 7 weeks#7420']").remove();
        $("#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2 option[value='7 to 8 weeks#7421']").remove();


    },

    hideDiv: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        if ($("#ctl00_ContentPlaceHolder1_RRBsingleboard").prop("checked")) {
            $('#panelBy').css('display', 'none');
            $('#hidePcbx').css('margin-top', '11%');
            $('#hidePcby').css('margin-top', '11%');
            $('#hideSurface').css('margin-top', '22%');
            $('#hideDelAddr').css('margin-top', '22%');
            $('#hideQty').css('margin-top', '33%');
            $('#hideDelDays').css('margin-top', '33%');
            $('#HideAssemblydays').css('margin-top', '33%');
            $('#hideBtnCalc').css('margin-top', '3%');
            $('#hideDiffDesign').hide();
            $('#hidePCBPanel').hide();
            $('#hideBoardSep').hide();
            $('#hideRepeatx').hide();
            $('#hideRepeaty').hide();
            $('#hidePanelx').hide();
            $('#hidePanely').hide();
            $('#hidePanelBorder').hide();
            $('#hideDistance').hide();
            $('#hideQtyUnit').hide();
        }
        else if ($("#ctl00_ContentPlaceHolder1_RRBPanel").prop("checked")) {
            if ($("#ctl00_ContentPlaceHolder1_RRBCustomer").prop("checked")) {

                $('#hidePcbx').hide();
                $('#hidePcby').hide();
                $('#hideRepeatx').hide();
                $('#hideRepeaty').hide();
                $('#hidePanelBorder').hide();
                $('#hideDistance').hide();
                $('#hidePanelx').css('margin-top', '33%');
                $('#hidePanely').css('margin-top', '33%');
                $('#hideSurface').css('margin-top', '44%');
                $('#hideDelAddr').css('margin-top', '44%');
                $('#hideQtyUnit').css('margin-top', '55%');
                $('#hideQty').css('margin-top', '66%');
                $('#hideDelDays').css('margin-top', '66%');
                $('#HideAssemblydays').css('margin-top', '66%');
            }
            else {
                $('#hideDiffDesign').show();
                $('#hidePCBPanel').show();
                $('#hideBoardSep').show();
                $('#hideRepeatx').show();
                $('#hideRepeaty').show();
                $('#hidePanelx').show();
                $('#hidePanely').show();
                $('#hidePanelBorder').show();
                $('#hideDistance').show();
            }
        }
    },

    changeToolTip: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var checkSession = '<%= Session["UserCurrency"] != null%>';
        var access = '<%= Request.QueryString["access"]%>';
        var key = '<%= Request.QueryString["key"]%>';
        if (checkSession == 'False') {
            if ((access != 'public') || (access == 'public' && key == '1')) {
                //run with session
                window.location.href = "../../basic/sessionexpires.aspx";
            }
        }

    },

    checkblock: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var Active = "<%=active%>";
        if (Active == 1031 || Active == 1033) {
            $('#ctl00_ContentPlaceHolder1_btnSubmitOrder').attr('onclick', '').unbind('click');
            $('#ctl00_ContentPlaceHolder1_Btngenerateoffer').attr('onclick', '').unbind('click');
            $('#ctl00_ContentPlaceHolder1_btnSubmitOrder').click(function () {
                showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                return false;
            });
            $('#ctl00_ContentPlaceHolder1_Btngenerateoffer').click(function () {
                showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                return false;
            });
        }
    },

    showPriceLoading: function () {
        $('#ctl00_ContentPlaceHolder1_imgCurrLogoUnitprcNew1,#ctl00_ContentPlaceHolder1_imgCurrLogoNew1').hide();
        $('#ctl00_ContentPlaceHolder1_lblUnitPrcNew,#ctl00_ContentPlaceHolder1_lblTotalPriceNew').text('Loading..');
        $('#ctl00_ContentPlaceHolder1_lblnextunitprc1,#ctl00_ContentPlaceHolder1_lblnextunitprc2').text('Loading..');
        $('#ctl00_ContentPlaceHolder1_lblnexttotalprc1,#ctl00_ContentPlaceHolder1_lblnexttotalprc2').text('Loading..');
    },

    setEdgeConnector_HardGold: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var edgeConnectHardGold = $('#ctl00_ContentPlaceHolder1_hdnEdgeConnecTopDepndsonHardGold').val();
        $('#ctl00_ContentPlaceHolder1_txtedgeConnectop').val(edgeConnectHardGold).change();
    },

    setLayer: function (selectedId) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.layers').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_layer').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.layers[data-val=' + selectedId + ']').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_layer').removeClass('fa-circle-o').addClass('fa-check-circle');
            $('#spnMatrixLayer').text($(this).text());
        });
    },

    setMaterial: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.MaterialNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_material').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.MaterialNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_material').removeClass('fa-circle-o').addClass('fa-check-circle');
            $('#spnMatrixMaterial').text($(this).text());
        });
    },

    setBoardThickness: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.BoardThicknessNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_BoardThick').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.BoardThicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_BoardThick').removeClass('fa-circle-o').addClass('fa-check-circle');

        });
    },

    setHideAlterCalculater: function (selectedLayer) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (selectedLayer == '2317' || selectedLayer == '2318' || selectedLayer == '7308' || selectedLayer == '7309' || selectedLayer == '7310' || selectedLayer == '7311') {//ML14,ML16,ML18,ML20,ML22,ML24
            var Assemblycheck = $("#ctl00_ContentPlaceHolder1_RRBAssemblyYes").prop('checked')
            if (Assemblycheck) {
                $('#ctl00_ContentPlaceHolder1_divpmatrix').hide();
            }
            else {
                $('#ctl00_ContentPlaceHolder1_divPcbAlternative').hide();
            }

        }
    },

    setAssemblyStencil: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.AssemblystencilType').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_asmblySide').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.AssemblystencilType[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_asmblySide').removeClass('fa-circle-o').addClass('fa-check-circle');
        });

    },

    setAssemblyStencilSide: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.AssemblystencilSide').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_asmblyStencilSide').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.AssemblystencilSide[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_asmblyStencilSide').removeClass('fa-circle-o').addClass('fa-check-circle');
        });

    },

    setComponentType: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.Assemby_comp_type1').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.Assemby_comp_type1[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });

    },

    setWorkingDaysPerIncremantal1: function () {
        
        $(document).ready(function () {
            PLACEORDER.CheckPCBNameBorderColor();
            //if Impedance control/Special Buildup or Blind vias has value Yes then start from according to INCREMENTAL 1 sheet
            var val_Layer = $('#ctl00_ContentPlaceHolder1_hdnLayer').val();
            var val_Impedancecontrol = $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val();
            var val_SpecilaBuildup = $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val();
            var val_BlindBuriedVia = $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val();
            if (val_Layer == '2183') {//ML4
                if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('10#1452');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452');
                    return true;
                }
                else if (val_BlindBuriedVia != 'No') {

                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').show();
                    PLACEORDER.setDeliveryDays('15#1453');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453');
                    return false;
                }
                else {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    return false;
                }
            }
            else if (val_Layer == '2184') {//ML6

                if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('10#1452');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452');
                    return true;
                }
                else if (val_BlindBuriedVia != 'No') {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').show();
                    PLACEORDER.setDeliveryDays('15#1453');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453');
                    return false;
                }
                else {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').show();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('7#529');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529');
                    return false;
                }
            }
            else if (val_Layer == '2185') {//ML8

                if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').show();
                    PLACEORDER.setDeliveryDays('15#1453');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453');
                    return true;
                }
                else if (val_BlindBuriedVia != 'No') {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    $('.DeliveryDaysNew[data-val="20#7273"]').show();
                    PLACEORDER.setDeliveryDays('20#7273');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273');
                    return false;
                }
                else {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').show();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('7#529');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529');
                    return false;
                }
            }
            else if (val_Layer == '2198') {//ML10

                if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').show();
                    PLACEORDER.setDeliveryDays('15#1453');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453');
                    return true;
                }
                else if (val_BlindBuriedVia != 'No') {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    $('.DeliveryDaysNew[data-val="20#7273"]').show();
                    PLACEORDER.setDeliveryDays('20#7273');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273');
                    return false;
                }
                else {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').show();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('7#529');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529');
                    return false;
                }
            }
            else if (val_Layer == '2316') {//ML12
                if ((val_Impedancecontrol == 'Yes' || val_SpecilaBuildup == 'Yes') && (val_BlindBuriedVia == 'No')) {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').show();
                    PLACEORDER.setDeliveryDays('15#1453');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('15#1453');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('15#1453');
                    return true;
                }
                else if (val_BlindBuriedVia != 'No') {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').hide();
                    $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                    $('.DeliveryDaysNew[data-val="20#7273"]').show();
                    PLACEORDER.setDeliveryDays('20#7273');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('20#7273');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('20#7273');
                    return false;
                }
                else {
                    $('.DeliveryDaysNew[data-val="3#333"]').hide();
                    $('.DeliveryDaysNew[data-val="5#334"]').hide();
                    $('.DeliveryDaysNew[data-val="7#529"]').hide();
                    $('.DeliveryDaysNew[data-val="10#1452"]').show();
                    PLACEORDER.setDeliveryDays('10#1452');
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452');
                    return false;
                }
            }
        });
    },


    showSolderMaskGreenForAllMaterialthanMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Solder mask top
        $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorTop').val('gr');
        $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('gr');
        $('.SolderMaskColorTopNew[data-val="gr"]').show();
        $('.SolderMaskColorTopNew[data-val="Red"]').show();
        $('.SolderMaskColorTopNew[data-val="bl"]').show();
        $('.SolderMaskColorTopNew[data-val="bk"]').show();
        PLACEORDER.setSolderMaskColorTop('gr');

        //Solder mask bottom
        $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorBottom').val('gr');
        $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('gr');
        $('.SolderMaskColorBottomNew[data-val="gr"]').show();
        $('.SolderMaskColorBottomNew[data-val="Red"]').show();
        $('.SolderMaskColorBottomNew[data-val="bl"]').show();
        $('.SolderMaskColorBottomNew[data-val="bk"]').show();
        PLACEORDER.setSolderMaskColorBottom('gr');
    },

    showSolderMaskWhiteForMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Solder mask top
        $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorTop').val('wh');
        $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('wh');
        PLACEORDER.setSolderMaskColorTop('wh');
        $('.SolderMaskColorTopNew[data-val="gr"]').hide();
        $('.SolderMaskColorTopNew[data-val="Red"]').hide();
        $('.SolderMaskColorTopNew[data-val="bl"]').hide();
        $('.SolderMaskColorTopNew[data-val="bk"]').hide();

        //Solder mask bottom
        $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorBottom').val('wh');
        $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('wh');
        PLACEORDER.setSolderMaskColorBottom('wh');
        $('.SolderMaskColorBottomNew[data-val="gr"]').hide();
        $('.SolderMaskColorBottomNew[data-val="Red"]').hide();
        $('.SolderMaskColorBottomNew[data-val="bl"]').hide();
        $('.SolderMaskColorBottomNew[data-val="bk"]').hide();
    },

    showLegendWhiteForAllMaterialthanMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Legend top
        $('#ctl00_ContentPlaceHolder1_hdnLegendTop').val('wh');
        $('#ctl00_ContentPlaceHolder1_DDLLegendTop').val('wh');
        $('.LegendTopNew[data-val="wh"]').show();
        PLACEORDER.setLegendTop('wh');

        //Legend bottom             
        $('#ctl00_ContentPlaceHolder1_hdnLegendBottom').val('wh');
        $('#ctl00_ContentPlaceHolder1_DDLLegendBottom').val('wh');
        $('.LegendbottomNew[data-val="wh"]').show();
        PLACEORDER.setLegendBottom('wh');
    },

    showLegendBlackForMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Legend top
        $('#ctl00_ContentPlaceHolder1_hdnLegendTop').val('BL');
        $('#ctl00_ContentPlaceHolder1_DDLLegendTop').val('BL');
        $('.LegendTopNew[data-val="BL"]').show();
        PLACEORDER.setLegendTop('BL');
        $('.LegendTopNew[data-val="wh"]').hide();

        //Legend bottom             
        $('#ctl00_ContentPlaceHolder1_hdnLegendBottom').val('BL');
        $('#ctl00_ContentPlaceHolder1_DDLLegendBottom').val('BL');
        $('.LegendbottomNew[data-val="BL"]').show();
        PLACEORDER.setLegendBottom('BL');
        $('.LegendbottomNew[data-val="wh"]').hide();
    },

    setSurfaceFinishOtherThanMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Surface Finish
        $('.surfacefinishNew[data-val="Sn"]').show();
        $('.surfacefinishNew[data-val="Au"]').show();
        $('.surfacefinishNew[data-val="PBFREE"]').show();
        $('.surfacefinishNew[data-val="NP"]').show();
        $('#ctl00_ContentPlaceHolder1_hdnSurfaceFinish').val('HAL');
        $('#ctl00_ContentPlaceHolder1_DDLsurfacefinish').val('HAL');
        PLACEORDER.setSurfacefinish('HAL');
    },


    setSurfaceFinishForMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //Surface Finish
        $('.surfacefinishNew[data-val="Sn"]').hide();
        $('.surfacefinishNew[data-val="Au"]').hide();
        $('.surfacefinishNew[data-val="PBFREE"]').hide();
        $('.surfacefinishNew[data-val="NP"]').hide();
        $('#ctl00_ContentPlaceHolder1_hdnSurfaceFinish').val('HAL');
        $('#ctl00_ContentPlaceHolder1_DDLsurfacefinish').val('HAL');
        PLACEORDER.setSurfacefinish('HAL');

        $("#ctl00_ContentPlaceHolder1_RRBsingleboardNew").click();
        $("#ctl00_ContentPlaceHolder1_RRBPanelNew").attr('disabled', true);
    },


    hidePanelForMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $("#ctl00_ContentPlaceHolder1_RRBPanelNew").attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', false);
        //$('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        //PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRO4350B: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRO4003C: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRT5880: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRT3003: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRO4534: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForRO6002: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForITERAMT: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    hidePanelForITERA: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', true);
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        PLACEORDER.HideAssemblyDetails();
    },

    showPanelForFR4: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', false);
        $('#ctl00_ContentPlaceHolder1_RRBPanelNew').attr('disabled', false);
        //$('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').prop('checked', true);
    },

    hide_setSurfaceFinishForMCPCB: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.surfacefinishNew[data-val="Sn"]').hide();
        $('.surfacefinishNew[data-val="Au"]').hide();
        $('.surfacefinishNew[data-val="PBFREE"]').hide();
        $('.surfacefinishNew[data-val="NP"]').hide();
    },

    setDefaultValuesByLayer: function (selectedLayer) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('#divMainBoardThickness').show();
        var selectedMaterial = $('.MaterialNew[class*="selecter-on"]').text();

        $('.clsdivImpedancecontrolNew').show();
        $('.clsDivSpecilaBuildupNew').show();
        $('.clsdivViafillNew').show();
        $('.clsdivPeelOffNew').show();
        $('.clsdivCarboncontactsNew').show();
        $('.clsdivHardGoldNew').show();
        $('.clsdivBevellingNew').show();
        $('.clsdivCountersunkNew').show();
        $('.clsdivRoundEdgePlattingNew').show();
        $('.clsdivULsignNew').show();

        if (selectedMaterial == 'FR4') {
            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').show();
            $('.layers[data-val="2184"]').show();
            $('.layers[data-val="2185"]').show();
            $('.layers[data-val="2198"]').show();
            $('.layers[data-val="2316"]').show();
            $('.layers[data-val="2317"]').show();
            $('.layers[data-val="2318"]').show();
            $('.layers[data-val="7308"]').show();
            $('.layers[data-val="7309"]').show();
            $('.layers[data-val="7310"]').show();
            $('.layers[data-val="7311"]').show();
            $('.clsmorelayers').show();

            $('.clsBlindburiedviaNew').show();

            //$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
            //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');

            if (selectedLayer == '2180' || selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').show();
                $('.BoardThicknessNew[data-val="0.4"]').show();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').show();
                $('.BoardThicknessNew[data-val="0.7"]').show();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').show();
                $('.BoardThicknessNew[data-val="1.2"]').show();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();
                $('.BoardThicknessNew[data-val="3.2"]').show();

                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();
            }
            else if (selectedLayer == '2183') {//ML4
                PLACEORDER.setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').show();
                $('.BoardThicknessNew[data-val="1.2"]').show();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();

                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                PLACEORDER.setWorkingDaysPerIncremantal1();

                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').show();
                $('.DeliveryDaysNew[data-val="25#7272"]').show();
            }
            else if (selectedLayer == '2184') {//ML6
                PLACEORDER.setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').hide();
                $('.BoardThicknessNew[data-val="1.0"]').show();
                $('.BoardThicknessNew[data-val="1.2"]').show();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                PLACEORDER.setWorkingDaysPerIncremantal1();
                $('.DeliveryDaysNew[data-val="15#1453"]').show();
                $('.DeliveryDaysNew[data-val="25#7272"]').show();
            }
            else if (selectedLayer == '2185') {//ML8
                PLACEORDER.setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').hide();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').show();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();

                //$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                //$('.StartCopperThicknessNew[data-val="17.50"]').show();
                //$('.StartCopperThicknessNew[data-val="35.00"]').show();
                //$('.StartCopperThicknessNew[data-val="70.00"]').show();
                //$('.StartCopperThicknessNew[data-val="90.00"]').show();
                //$('.StartCopperThicknessNew[data-val="140.00"]').show();
                //$('.StartCopperThicknessNew[data-val="105.00"]').show();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                PLACEORDER.setWorkingDaysPerIncremantal1();
                //$('.DeliveryDaysNew[data-val="3#333"]').hide();
                //$('.DeliveryDaysNew[data-val="5#334"]').hide();
                //$('.DeliveryDaysNew[data-val="7#529"]').hide();
                //$('.DeliveryDaysNew[data-val="10#1452"]').show();
                //$('.DeliveryDaysNew[data-val="15#1453"]').show();
                $('.DeliveryDaysNew[data-val="25#7272"]').show();

            }
            else if (selectedLayer == '2198') {//ML10
                PLACEORDER.setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').hide();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                PLACEORDER.setWorkingDaysPerIncremantal1();
            }
            else if (selectedLayer == '2316' || selectedLayer == '2317') {//ML12 or ML14                
                PLACEORDER.setBoardThickness('2.4');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('2.4');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('2.4'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('2.4').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').hide();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').show();

                //$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                //$('.StartCopperThicknessNew[data-val="17.50"]').show();
                //$('.StartCopperThicknessNew[data-val="35.00"]').show();
                //$('.StartCopperThicknessNew[data-val="70.00"]').show();
                //$('.StartCopperThicknessNew[data-val="90.00"]').show();
                //$('.StartCopperThicknessNew[data-val="140.00"]').show();
                //$('.StartCopperThicknessNew[data-val="105.00"]').show();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                PLACEORDER.setWorkingDaysPerIncremantal1();
                if (selectedLayer == '2317') {
                    $('#ctl00_ContentPlaceHolder1_divPcbAlternative').hide();
                    $('#ctl00_ContentPlaceHolder1_divpmatrix').hide();
                }
                //$('.DeliveryDaysNew[data-val="3#333"]').hide();
                //$('.DeliveryDaysNew[data-val="5#334"]').hide();
                //$('.DeliveryDaysNew[data-val="7#529"]').hide();
                //$('.DeliveryDaysNew[data-val="10#1452"]').show();
                //$('.DeliveryDaysNew[data-val="15#1453"]').show();
                //$('.DeliveryDaysNew[data-val="28#7272"]').show();
                //setDeliveryDays('10#1452');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('10#1452');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('10#1452').change();
            }

            else if (selectedLayer == '2318' || selectedLayer == '7308' || selectedLayer == '7309' || selectedLayer == '7310' || selectedLayer == '7311') {//ML16,ML18,ML20,ML22,ML24           
                PLACEORDER.setBoardThickness('3.2');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('3.2');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('3.2'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('3.2').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').hide();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('#ctl00_ContentPlaceHolder1_divPcbAlternative').hide();
                $('#ctl00_ContentPlaceHolder1_divpmatrix').hide();
                //$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                //$('.StartCopperThicknessNew[data-val="17.50"]').show();
                //$('.StartCopperThicknessNew[data-val="35.00"]').show();
                //$('.StartCopperThicknessNew[data-val="70.00"]').show();
                //$('.StartCopperThicknessNew[data-val="90.00"]').show();
                //$('.StartCopperThicknessNew[data-val="140.00"]').show();
                //$('.StartCopperThicknessNew[data-val="105.00"]').show();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

            }

            if (selectedLayer == '2180') {
                //$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                //$('.StartCopperThicknessNew[data-val="0.00"]').show();
                $('.StartCopperThicknessNew[data-val="17.50"]').show();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').show();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide();
            }
            else {
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                //$('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').show();
            }
        }
        else if (selectedMaterial == 'MCPCB') {
            PLACEORDER.setBoardThickness('1.6');
            $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
            $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
            $('.BoardThicknessNew[data-val="0.25"]').hide();
            $('.BoardThicknessNew[data-val="0.3"]').hide();
            $('.BoardThicknessNew[data-val="0.4"]').hide();
            $('.BoardThicknessNew[data-val="0.5"]').hide();
            $('.BoardThicknessNew[data-val="0.6"]').hide();
            $('.BoardThicknessNew[data-val="0.7"]').hide();
            $('.BoardThicknessNew[data-val="0.8"]').hide();
            $('.BoardThicknessNew[data-val="1.0"]').hide();
            $('.BoardThicknessNew[data-val="1.2"]').hide();
            $('.BoardThicknessNew[data-val="1.6"]').show();
            $('.BoardThicknessNew[data-val="2.0"]').hide();
            $('.BoardThicknessNew[data-val="2.4"]').hide();
            $('.BoardThicknessNew[data-val="3.2"]').hide();

            PLACEORDER.CalcOuterCUFinish();
            $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
            $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
            $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
            $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
            //$('.StartCopperThicknessNew[data-val="17.50"]').show();
            //$('.StartCopperThicknessNew[data-val="35.00"]').show();
            //$('.StartCopperThicknessNew[data-val="70.00"]').show();
            //$('.StartCopperThicknessNew[data-val="90.00"]').hide();
            //$('.StartCopperThicknessNew[data-val="140.00"]').show();
            //$('.StartCopperThicknessNew[data-val="105.00"]').show();
            //PLACEORDER.CalcStartOutFinish();
            //PLACEORDER.CalcOuterCUFinish();
			
            //setDeliveryDays('7#529');
            //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
            //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
            $('.DeliveryDaysNew[data-val="3#333"]').show();
            $('.DeliveryDaysNew[data-val="5#334"]').show();
            $('.DeliveryDaysNew[data-val="7#529"]').show();
            $('.DeliveryDaysNew[data-val="10#1452"]').show();
            $('.DeliveryDaysNew[data-val="15#1453"]').show();
            $('.DeliveryDaysNew[data-val="20#7273"]').show();
            $('.DeliveryDaysNew[data-val="25#7272"]').show();

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').hide();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            //Blind & Burried via
            $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
            $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
            PLACEORDER.setBlindBuriedVia('No');
            $('.clsBlindburiedviaNew').hide();

            //setSurfaceFinishForMCPCB();

            // Impedence control 
            $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val('No');
            $('#ctl00_ContentPlaceHolder1_DDLImpedanceControl').val('No');
            PLACEORDER.setImpedancecontrol('No');
            $('.clsdivImpedancecontrolNew').hide();

            // Special Buildup 
            $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
            $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
            PLACEORDER.setImpedancecontrol('No');
            $('.clsDivSpecilaBuildupNew').hide();

            //Via fill
            $('#ctl00_ContentPlaceHolder1_hdnViaFill').val('No');
            $('#ctl00_ContentPlaceHolder1_CHKViaFill').prop('checked', false);
            PLACEORDER.setViafill('No');
            $('.clsdivViafillNew').hide();

            //Peel off
            $('#ctl00_ContentPlaceHolder1_hdnPeelOff').val('0');
            $('#ctl00_ContentPlaceHolder1_DDLPeelOff').val('0');
            PLACEORDER.setPeelOff('0');
            $('.clsdivPeelOffNew').hide();

            //Carbon contacts
            $('#ctl00_ContentPlaceHolder1_hdnCarboncontacts').val('0');
            $('#ctl00_ContentPlaceHolder1_DDlCarboncontacts').val('0');
            PLACEORDER.setCarbonContacts('0');
            $('.clsdivCarboncontactsNew').hide();

            // Bevelling
            $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
            $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
            PLACEORDER.setBevelling('No');
            $('.clsdivBevellingNew').hide();

            // Countersunk
            $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
            $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
            PLACEORDER.setCountersunk('No');
            $('.clsdivCountersunkNew').hide();

            // Round Edge Platting?
            $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
            $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
            PLACEORDER.setRoundEdgePlatting('No');
            $('.clsdivRoundEdgePlattingNew').hide();

            //showSolderMaskWhiteForMCPCB();
            //showLegendBlackForMCPCB();

        }
        else if (selectedMaterial == 'RO4350B') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else if (selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); //$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('60.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('60.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else if (selectedMaterial == 'RO4534' || selectedMaterial == 'RO4003C') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.8');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.8');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); // $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else if (selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.8');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.8');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00'); // $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00').change();
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('60.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('60.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else if (selectedMaterial == 'RT5880') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180' || selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');//setBoardThickness('1.6');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');//$('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').show();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');//$('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('17.50');//$('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').show();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else if (selectedMaterial == 'RT3003') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.8');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.8');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else if (selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.8');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.8');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').hide();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('60.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('60.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else if (selectedMaterial == 'RO6002') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else if (selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('60.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('60.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else if (selectedMaterial == 'ITERA-MT-3.38' || selectedMaterial == 'ITERA-MT-3.5') {

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').hide();
            $('.layers[data-val="2184"]').hide();
            $('.layers[data-val="2185"]').hide();
            $('.layers[data-val="2198"]').hide();
            $('.layers[data-val="2316"]').hide();
            $('.layers[data-val="2317"]').hide();
            $('.layers[data-val="2318"]').hide();
            $('.layers[data-val="7308"]').hide();
            $('.layers[data-val="7309"]').hide();
            $('.layers[data-val="7310"]').hide();
            $('.layers[data-val="7311"]').hide();
            $('.clsmorelayers').hide();

            $('.clsBlindburiedviaNew').show();

            if (selectedLayer == '2180') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').show();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else if (selectedLayer == '2181') {//Single sided , double sided
                PLACEORDER.setBoardThickness('0.5');
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                $('.BoardThicknessNew[data-val="0.25"]').show();
                $('.BoardThicknessNew[data-val="0.3"]').hide();
                $('.BoardThicknessNew[data-val="0.4"]').hide();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').hide();
                $('.BoardThicknessNew[data-val="0.7"]').hide();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').hide();
                $('.BoardThicknessNew[data-val="1.2"]').hide();
                $('.BoardThicknessNew[data-val="1.6"]').hide();
                $('.BoardThicknessNew[data-val="2.0"]').hide();
                $('.BoardThicknessNew[data-val="2.4"]').hide();
                $('.BoardThicknessNew[data-val="3.2"]').hide();

                PLACEORDER.CalcOuterCUFinish();
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('60.00');
                $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('60.00');
                $('.StartCopperThicknessNew[data-val="17.50"]').hide();
                $('.StartCopperThicknessNew[data-val="35.00"]').show();
                $('.StartCopperThicknessNew[data-val="70.00"]').hide();
                $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                $('.StartCopperThicknessNew[data-val="140.00"]').hide();
                $('.StartCopperThicknessNew[data-val="105.00"]').hide();
                //PLACEORDER.CalcStartOutFinish();
                //PLACEORDER.CalcOuterCUFinish();

                //setDeliveryDays('7#529');
                //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
                //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
                $('.DeliveryDaysNew[data-val="3#333"]').show();
                $('.DeliveryDaysNew[data-val="5#334"]').show();
                $('.DeliveryDaysNew[data-val="7#529"]').show();
                $('.DeliveryDaysNew[data-val="10#1452"]').show();
                $('.DeliveryDaysNew[data-val="15#1453"]').hide();
                $('.DeliveryDaysNew[data-val="20#7273"]').hide();
                $('.DeliveryDaysNew[data-val="25#7272"]').hide();
                $('#divDeliveryDaysNew').show();

                $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
                $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
                PLACEORDER.setBlindBuriedVia('No');
                $('.clsBlindburiedviaNew').hide();

                // Special Buildup 
                $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').prop('checked', false);
                PLACEORDER.setImpedancecontrol('No');
                $('.clsDivSpecilaBuildupNew').hide();

                // Bevelling
                $('#ctl00_ContentPlaceHolder1_hdnBevelling').val('No');
                $('#ctl00_ContentPlaceHolder1_ChkBevelling').prop('checked', false);
                PLACEORDER.setBevelling('No');
                $('.clsdivBevellingNew').hide();

                // Countersunk
                $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val('No');
                PLACEORDER.setCountersunk('No');
                $('.clsdivCountersunkNew').hide();

                // Round Edge Platting?
                $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val('No');
                $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val('No');
                PLACEORDER.setRoundEdgePlatting('No');
                $('.clsdivRoundEdgePlattingNew').hide();

                // UL sign
                $('#ctl00_ContentPlaceHolder1_hdnULSign').val('No');
                $('#ctl00_ContentPlaceHolder1_CHKULSign').prop('checked', false);
                PLACEORDER.setULsign('No');
                $('.clsdivULsignNew').hide();

                //showSolderMaskGreenForAllMaterialthanMCPCB();
                //showLegendWhiteForAllMaterialthanMCPCB();
                //setSurfaceFinishOtherThanMCPCB();
            }
            else {
                $('#divMainBoardThickness').hide();
                $('#divMainStartCopperThickness').hide();
                $('#divDeliveryDaysNew').hide();
            }
        }
        else {
            $('#divMainBoardThickness').show();
            PLACEORDER.setBoardThickness('1.6');
            $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
            $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
            $('.BoardThicknessNew[data-val="0.25"]').hide();
            $('.BoardThicknessNew[data-val="0.3"]').show();
            $('.BoardThicknessNew[data-val="0.4"]').show();
            $('.BoardThicknessNew[data-val="0.5"]').show();
            $('.BoardThicknessNew[data-val="0.6"]').show();
            $('.BoardThicknessNew[data-val="0.7"]').show();
            $('.BoardThicknessNew[data-val="0.8"]').show();
            $('.BoardThicknessNew[data-val="1.0"]').show();
            $('.BoardThicknessNew[data-val="1.2"]').show();
            $('.BoardThicknessNew[data-val="1.6"]').show();
            $('.BoardThicknessNew[data-val="2.0"]').show();
            $('.BoardThicknessNew[data-val="2.4"]').show();
            $('.BoardThicknessNew[data-val="3.2"]').show();

            PLACEORDER.CalcOuterCUFinish();
            $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
            $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val('35.00');
            $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val('35.00');
            $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val('35.00');
            $('.StartCopperThicknessNew[data-val="17.50"]').show();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            $('.StartCopperThicknessNew[data-val="70.00"]').show();
            $('.StartCopperThicknessNew[data-val="90.00"]').hide();
            $('.StartCopperThicknessNew[data-val="140.00"]').show();
            $('.StartCopperThicknessNew[data-val="105.00"]').show();
            //PLACEORDER.CalcStartOutFinish();
            //PLACEORDER.CalcOuterCUFinish();

            //setDeliveryDays('7#529');
            //$('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val('7#529');
            //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('7#529'); //$('#ctl00_ContentPlaceHolder1_ddlDelTerms').val('3#333').change();
            $('.DeliveryDaysNew[data-val="3#333"]').show();
            $('.DeliveryDaysNew[data-val="5#334"]').show();
            $('.DeliveryDaysNew[data-val="7#529"]').show();
            $('.DeliveryDaysNew[data-val="10#1452"]').show();
            $('.DeliveryDaysNew[data-val="15#1453"]').show();
            $('.DeliveryDaysNew[data-val="25#7272"]').show();
            $('#divDeliveryDaysNew').show();

            $('.layers[data-val="2180"]').show();
            $('.layers[data-val="2181"]').show();
            $('.layers[data-val="2183"]').show();
            $('.layers[data-val="2184"]').show();
            $('.layers[data-val="2185"]').show();
            $('.layers[data-val="2198"]').show();
            $('.layers[data-val="2316"]').show();
            $('.layers[data-val="2317"]').show();
            $('.layers[data-val="2318"]').show();
            $('.layers[data-val="7308"]').show();
            $('.layers[data-val="7309"]').show();
            $('.layers[data-val="7310"]').show();
            $('.layers[data-val="7311"]').show();
            $('.clsmorelayers').show();

            $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val('No');
            $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val('No');
            PLACEORDER.setBlindBuriedVia('No');
            $('.clsBlindburiedviaNew').show();
        }
        var surfArea = parseFloat($('#ctl00_ContentPlaceHolder1_hdnSurfaceArea').val());
        //hideworkingdayspersqmter(surfArea);
    },

    setStartCopperThickness: function (selectedId) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.StartCopperThicknessNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_CUthickness').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.StartCopperThicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_CUthickness').removeClass('fa-circle-o').addClass('fa-check-circle');
        });
    },

    setOuterFinishCopperThickness: function (selectedId) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.OuterfinishcuthicknessNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_OuterCUthickness').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.OuterfinishcuthicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_OuterCUthickness').removeClass('fa-circle-o').addClass('fa-check-circle');
        });
        //PLACEORDER.setStartCopperThickness(selectedId);
    },

    setDeliveryDays: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DeliveryDaysNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_pcbworkdays').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.DeliveryDaysNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_pcbworkdays').removeClass('fa-circle-o').addClass('fa-check-circle');
            $('#spnMatrixDeliveryDays').text($(this).text());
        });
    },

    setAssemblyDeliveryDays: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DeliveryDaysNew1').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_awd').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.DeliveryDaysNew1[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_awd').removeClass('fa-circle-o').addClass('fa-check-circle');

        });
    },

    changeDeliveryDaysPerLayer: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val(selectedId);
        $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val(selectedId).change();
    },

    showDeliveryDaysPerLayer: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var layer = document.getElementById("ctl00_ContentPlaceHolder1_ddlLayers");
        var checkLayer = layer.options[layer.selectedIndex].value;
        //if (checkLayer == '2183' || checkLayer == '2184') {
        //    $('.DeliveryDaysNew[data-val="3#333"]').hide();
        //}
        //else {
        //    $('.DeliveryDaysNew[data-val="3#333"]').show();
        //}

        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        var singleboard = $("#ctl00_ContentPlaceHolder1_RRBsingleboardNew").prop('checked');
        var panelboard = $("#ctl00_ContentPlaceHolder1_RRBPanelNew").prop('checked');
        var panelbycustomer = $("#ctl00_ContentPlaceHolder1_RRBCustomerNew").prop('checked');
        if (material == "FR4") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }

            if (checkLayer != "2180" && checkLayer != "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 415 and Y value >= 20 and <= 565.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 415 ; 20 <= Y <= 565.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 415.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 565.');
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 415 and Y value >= 5 and <= 565.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 415 ; 5 <= Y <= 565.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 415.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 565.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                }
            }

            if (checkLayer != "2180" && checkLayer != "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 36 and <= 415 and Y value >= 36 and <= 565.');
                    $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '36 <= X <= 415 ; 36 <= Y <= 565.');
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 36 and 415.');
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 36 and 565.');
                }
            }

            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 36 and <= 430 and Y value >= 36 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '36 <= X <= 430 ; 36 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 36 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 36 and 585.');
                }
            }

            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }

            if (checkLayer != "2180" || checkLayer != "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 415 and Y value >= 50 and <= 565.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 415 ; 50 <= Y <= 565.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 415.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 565.');
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 415 ; 50 <= Y <= 565.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 415.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 565.');
                }
            }

            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
        }
        if (material == "MCPCB") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
        }

        if (material == "RO4350B") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RO4003C") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RT5880") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');

                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RT6002") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RT3003") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RO4534") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "RO6002") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "ITERA-MT-3.38") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }
        }

        if (material == "ITERA-MT-3.5") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (singleboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 20 and <= 430 and Y value >= 20 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '20 <= X <= 430 ; 20 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 20 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 20 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter X value >= 5 and <= 430 and Y value >= 5 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', '5 <= X <= 430 ; 5 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimX').attr('data-original-title', 'Please enter dimension X between 5 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_spanpcbdimY').attr('data-original-title', 'Please enter dimension Y between 5 and 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                    $('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimX').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                    //$('#ctl00_ContentPlaceHolder1_sapn_paneldimY').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                }
            }
            if (checkLayer == "2180" || checkLayer == "2181") {
                if (panelboard == true) {
                    if (panelbycustomer == true) {
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter X value >= 50 and <= 430 and Y value >= 50 and <= 585.');
                        $('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', '50 <= X <= 430 ; 50 <= Y <= 585.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimx').attr('data-original-title', 'Please enter dimension X between 50 and 430.');
                        //$('#ctl00_ContentPlaceHolder1_span_paneldimy').attr('data-original-title', 'Please enter dimension Y between 50 and 585.');
                    }
                }
            }

        }
    },

    setTG: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.TGNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_tg').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.TGNew[data-val=' + selectedId + ']').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_tg').removeClass('fa-circle-o').addClass('fa-check-circle');
            $('#spnMatrixTG').text($(this).text());
        });
    },

    showhideTG: function (isShow) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (isShow == '1') {
            $('.clsTGNew').show();
        }
        else {
            $('.clsTGNew').hide();
        }
    },

    setDeliveryAddress: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DeliveryAddressNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.DeliveryAddressNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setInvoiceAddress: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.InvoiceAddressNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.InvoiceAddressNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setInnercopperthickness: function (selectedId) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.InnercopperthicknessNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.InnercopperthicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setSpecilaBuildup: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.SpecilaBuildupNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.SpecilaBuildupNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setViafill: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.ViafillNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.ViafillNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $('#spnMatrixViaFill').text($(this).text());
        });
    },

    setBevelling: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.BevellingNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.BevellingNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },


    setCopperuntiltheedgeoftheboard: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.CopperuntiltheedgeoftheboardNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.CopperuntiltheedgeoftheboardNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setRoundEdgePlatting: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.RoundEdgePlattingNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.RoundEdgePlattingNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setULsign: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.ULsignNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.ULsignNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setManufacturinglogo: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.ManufacturinglogoNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.ManufacturinglogoNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setDatecode: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DatecodeNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.DatecodeNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setPrintEtok: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.PrintEtok').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.PrintEtok[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setImpedancecontrol: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.ImpedancecontrolNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.ImpedancecontrolNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $('#spnMatrixImpedancecontrol').text($(this).text());
        });
    },

    setBlindBuriedVia: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.BlindburiedviaNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.BlindburiedviaNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setPeelOff: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.PeelOffNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.PeelOffNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $('#spnMatrixPeelOff').text($(this).text());
        });
    },

    setCarbonContacts: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.CarboncontactsNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_cc').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.CarboncontactsNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_cc').removeClass('fa-circle-o').addClass('fa-check-circle');
        });
    },

    setSealizeforPCBs: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.SerializationforPCBsNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.SerializationforPCBsNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },

    setCountersunk: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.CountersunkNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.CountersunkNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $('#spnMatrixCountersunk').text($(this).text());
        });
    },

    setPlatedholesontheboardedge: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.PlatedholesontheboardedgeNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.PlatedholesontheboardedgeNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setSolderMaskColorTop: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.SolderMaskColorTopNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.SolderMaskColorTopNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setSolderMaskColorBottom: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.SolderMaskColorBottomNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.SolderMaskColorBottomNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setLegendTop: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.LegendTopNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.LegendTopNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setLegendBottom: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.LegendbottomNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.LegendbottomNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setDistancebwPCBs: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DistancebwPCBsNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.DistancebwPCBsNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setPanelBorder: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.PanelBorderNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.PanelBorderNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setBoardSeparation: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.BoardSeparation').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_bs').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.BoardSeparation[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_bs').removeClass('fa-circle-o').addClass('fa-check-circle');

            //$('#spnMatrixPlatedholesontheboardedge').text($(this).text());
        });
    },

    setPCBDimensionXValidation: function (validationType) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (validationType == 'blank') {
            $('#ctl00_ContentPlaceHolder1_RequiredFieldValidator_txtDimXNew').show();
        }
        else if (validationType == '0') {
            $('#ctl00_ContentPlaceHolder1_RangeValidator_txtDimXNew').show();
        }
    },

    setPCBsPerPanelValidation: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_RangeValidator_txtTotlaPCBBoardNew').show();
    },

    setRepeatXValidation: function (validationType) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (validationType == 'blank') {
            $('#ctl00_ContentPlaceHolder1_RangeValidator1_txtXNew').show();
        }
        else if (validationType == '0') {
            $('#ctl00_ContentPlaceHolder1_RangeValidator2_txtXNew').show();
        }
    },


    setSurface3and5workingday: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();

        $('.surfacefinishNew[data-val="Au"]').hide();
        $('#ctl00_ContentPlaceHolder1_hdnSurfaceFinish').val(selectedId);
        $('#ctl00_ContentPlaceHolder1_DDLsurfacefinish').val(selectedId);
        PLACEORDER.setSurfacefinish(selectedId);

    },


    setRepeatYValidation: function (validationType) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (validationType == 'blank') {
            $('#ctl00_ContentPlaceHolder1_RangeValidator1_txtYNew').show();
        }
        else if (validationType == '0') {
            $('#ctl00_ContentPlaceHolder1_RangeValidator2_txtYNew').show();
        }
    },
    DisableDiffDesignsperpanel: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_hdnDifferentDesignPerPanel').val('1');
        $('.DifferentDesignsperpanel').text('1');
        $('#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel').val('1').change();
    },
    setSurfacefinish: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.surfacefinishNew').each(function () {
            $(this).removeClass("selecter-on");
            $(this).children('.fa_sf').addClass('fa-circle-o').removeClass('fa-check-circle');
        });
        $('.surfacefinishNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
            $(this).children('.fa_sf').removeClass('fa-circle-o').addClass('fa-check-circle');
        });
    },
    setOuterfinishcuthickness: function (selectedId) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.OuterfinishcuthicknessNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.OuterfinishcuthicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },
    setStartcuthickness: function (selectedId) {
        
        PLACEORDER.CheckPCBNameBorderColor();
        $('.StartCopperThicknessNew').each(function () {
            $(this).removeClass("selecter-on");
        });
        $('.StartCopperThicknessNew[data-val="' + selectedId + '"]').each(function () {
            $(this).addClass("selecter-on");
        });
    },
    setDifferentDesignPerPanel: function (value) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DifferentDesignsperpanel').text(value);
        $('.DifferentDesignsperpanel').attr('data-val', value);
    },
    StencilSideHide: function (flage, value) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (flage == 'Yes') {
            if (value == 'None') {
                $('.AssemblystencilSide[data-val="' + value + '"]').hide();
                $('.AssemblystencilSide[data-val="Top"]').each(function () {
                    $('#ctl00_ContentPlaceHolder1_ddlAssemblyStencilSide').val($(this).attr('data-val')).change();
                    $('#ctl00_ContentPlaceHolder1_hdnAssemblyStencilSide').val('Top');
                    $(this).addClass("selecter-on");
                    $(this).children('.fa_asmblyStencilSide').removeClass('fa-circle-o').addClass('fa-check-circle');
                });
                $('.AssemblystencilSide[data-val="None"]').each(function () {
                    $(this).removeClass("selecter-on");
                    $(this).children('.fa_asmblyStencilSide').addClass('fa-circle-o').removeClass('fa-check-circle');
                });
            }
            else {
                $('.AssemblystencilSide[data-val="None"]').hide();
                //$('.AssemblystencilSide[data-val="' + value + '"]').each(function () {
                //    $('#ctl00_ContentPlaceHolder1_hdnAssemblyStencilSide').val(value);
                //    $('#ctl00_ContentPlaceHolder1_ddlAssemblyStencilSide').val($(this).attr('data-val')).change();
                //    $(this).addClass("selecter-on");
                //    $(this).children('.fa_asmblyStencilSide').removeClass('fa-circle-o').addClass('fa-check-circle');
                //});
            }
        }
        else {
            $('.AssemblystencilSide[data-val="' + value + '"]').show();

            $('.AssemblystencilSide[data-val="' + value + '"]').each(function () {
                $(this).removeClass("selecter-on");
                $(this).children('.fa_asmblyStencilSide').addClass('fa-circle-o').removeClass('fa-check-circle');
            });

        }
    },
    checkAssembly: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        //var pcbnamelength = $('#ctl00_ContentPlaceHolder1_txtpcbnameInquiry').val().replace(/ /g,'').length
        //if (pcbnamelength > 20) {
        //    showwarning('please enter PCBName between 0 to 20 characters.');
        //    return false;
        //}
        var isAsseChecked = $('#ctl00_ContentPlaceHolder1_chk_Assembly_Inquiry').prop('checked');
        if (isAsseChecked == true) {
            var file = $('#ctl00_ContentPlaceHolder1_fuBOMFile_Inquiry')[0].files;
            var len = $('#ctl00_ContentPlaceHolder1_fuBOMFile_Inquiry').get(0).files.length;
            if (len == 0) {
                showwarning('Please upload a Bill of material file.');
                return false;
            }
            else {
                var ext = file[0].name.split('.').pop().toLowerCase();
                if ($.inArray(ext, ['xlsx', 'xls', 'csv']) == -1) {
                    showwarning('Please upload only a .XLSX or .XLS file.');
                    return false;
                }
            }
        }

    },

    DisabledAssemblyWorkingDays: function (AssemblyDays) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (AssemblyDays == "333") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysAssembly option[value='3#333']").prop("disabled", true);
        }
        else if (AssemblyDays == "334") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysAssembly option[value='5#334']").prop("disabled", true);
        }
        else if (AssemblyDays == "529") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysAssembly option[value='7#529']").prop("disabled", true);
        }
        else if (AssemblyDays == "1452") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysAssembly option[value='10#1452']").prop("disabled", true);
        }
    },
    DisabledPcbWorkingDays: function (PcbDays) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (PcbDays == "333") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='3#333']").prop("disabled", true);
        }
        else if (PcbDays == "334") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='5#334']").prop("disabled", true);
        }
        else if (PcbDays == "529") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='7#529']").prop("disabled", true);
        }
        else if (PcbDays == "1452") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='10#1452']").prop("disabled", true);
        }
        else if (PcbDays == "1453") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='15#1453']").prop("disabled", true);
        }
        else if (PcbDays == "7273") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='20#7273']").prop("disabled", true);
        }
        else if (PcbDays == "7272") {
            $("#ctl00_ContentPlaceHolder1_DDlDelDaysPcb option[value='25#7272']").prop("disabled", true);
        }
    },



    activeAssemblyDiv: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.divAssemblydata').removeClass('Assemblyhidden');
        // $('.Assemblyclas').removeClass('Assemblyclass');
        $("#ctl00_ContentPlaceHolder1_Divxlsfile").show();
        $("#ctl00_ContentPlaceHolder1_divtxtfile").show();
        $("#ctl00_ContentPlaceHolder1_divHideAssembly").show();
        $("#ctl00_ContentPlaceHolder1_DivAssemblydays").show();
        $("#ctl00_ContentPlaceHolder1_DivComponentDays").show();
        $("#ctl00_ContentPlaceHolder1_AssemblywithPcbCalculater").show();
        $("#ctl00_ContentPlaceHolder1_DivPcbCalculater").hide();
        $("#ctl00_ContentPlaceHolder1_DivBomSampleFile").show();

        $("#ctl00_ContentPlaceHolder1_DivText").show();
        $("#chkAssemblyptions").find('.special_options_nav').addClass('active');
        $("#chkAssemblyptions").find('.special_options_wrap').show();
    },
    DisactiveAssemblyDiv: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $("#ctl00_ContentPlaceHolder1_Divxlsfile").hide();
        $("#ctl00_ContentPlaceHolder1_divtxtfile").hide();
        $("#ctl00_ContentPlaceHolder1_divHideAssembly").hide();
    },
    UserBlocked: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
        return false;
    },

    hideChangePcbdays: function (deldays) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (deldays == "3#333") {
            PLACEORDER.setDeliveryDays('3#333');
        }
        else if (deldays == "5#334") {
            PLACEORDER.setDeliveryDays('5#334');
        }
        else if (deldays == "7#529") {
            PLACEORDER.setDeliveryDays('7#529');
        }
        else if (deldays == "10#1452") {
            PLACEORDER.setDeliveryDays('10#1452');
        }
        else if (deldays == "15#1453") {
            PLACEORDER.setDeliveryDays('15#1453');
        }
        else if (deldays == "20#7273") {
            PLACEORDER.setDeliveryDays('20#7273');
        }
        else if (deldays == "25#7272") {
            PLACEORDER.setDeliveryDays('25#7272');
        }
    },
    hideChangeAssemblydays: function (Assdeldays) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (Assdeldays == "3#333") {
            PLACEORDER.setAssemblyDeliveryDays('3#333');
        }
        else if (Assdeldays == "5#334") {
            PLACEORDER.setAssemblyDeliveryDays('5#334');
        }
        else if (Assdeldays == "7#529") {
            PLACEORDER.setAssemblyDeliveryDays('7#529');
        }
        else if (Assdeldays == "10#1452") {
            PLACEORDER.setAssemblyDeliveryDays('10#1452');
        }

    },
    UpdateSuggestQty: function (Qtyvalue) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val(Qtyvalue);
        $('#ctl00_ContentPlaceHolder1_txtQuantity').val(Qtyvalue);
    },

    HideAssemblyDetails: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $("#ctl00_ContentPlaceHolder1_Divxlsfile").hide();
        $("#ctl00_ContentPlaceHolder1_divtxtfile").hide();
        $("#ctl00_ContentPlaceHolder1_DivAssemblydays").hide();
        $("#ctl00_ContentPlaceHolder1_divHideAssembly").hide();
        $("#ctl00_ContentPlaceHolder1_DivComponentDays").hide();
        $("#ctl00_ContentPlaceHolder1_AssemblywithPcbCalculater").hide();
        $("#ctl00_ContentPlaceHolder1_DivPcbCalculater").show();
        $("#ctl00_ContentPlaceHolder1_DivBomSampleFile").hide();

        $("#ctl00_ContentPlaceHolder1_DivText").hide();
    },
    DivGSTNumber_Open: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $(".modal-backdrop").remove();
        $('#DivGSTNumber').removeClass('fade hide');
        $('#DivGSTNumber').addClass('fade in');
        $('#DivGSTNumber').show();
        $('#divBootstrapPopup').show();
        $('<div class="modal-backdrop"></div>').appendTo(document.body);
    },
    DivGSTNumber_Close: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#DivGSTNumber').removeClass('fade in');
        $('#DivGSTNumber').css('display', 'none');
        $('#divBootstrapPopup').css('display', 'none');
        $(".modal-backdrop").remove();
    },
    hideAssemblyworkingdayspersqmter: function (surfaceArea, oldDelTerm) {
        PLACEORDER.CheckPCBNameBorderColor();
        $('.DeliveryDaysNew1[data-val="3#333"]').show();
        $('.DeliveryDaysNew1[data-val="5#334"]').show();
        $('.DeliveryDaysNew1[data-val="7#529"]').show();
        $('.DeliveryDaysNew1[data-val="10#1452"]').show();


        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();

        if (material == "FR4" || material == "MCPCB") { //Single
            //if (surfaceArea > 0.5 && surfaceArea <= 1) {
            //    $('.DeliveryDaysNew1[data-val="3#333"]').hide();
            //    if (oldDelTerm == "3#333") {
            //        PLACEORDER.setAssemblyDeliveryDays('5#334');
            //    }
            //}
            //else if (surfaceArea > 1 && surfaceArea <= 2) {
            //    $('.DeliveryDaysNew1[data-val="3#333"]').hide();
            //    $('.DeliveryDaysNew1[data-val="5#334"]').hide();

            //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334") {
            //        PLACEORDER.setAssemblyDeliveryDays('7#529');
            //    }
            //}
            //else if (surfaceArea > 2 && surfaceArea <= 3) {
            //    $('.DeliveryDaysNew1[data-val="3#333"]').hide();
            //    $('.DeliveryDaysNew1[data-val="5#334"]').hide();
            //    $('.DeliveryDaysNew1[data-val="7#529"]').hide();
            //    if (oldDelTerm == "3#333" || oldDelTerm == "5#334" || oldDelTerm == "7#529") {
            //        PLACEORDER.setAssemblyDeliveryDays('10#1452');
            //    }
            //}
             if (surfaceArea > 3 && surfaceArea <= 8) {
                $('.DeliveryDaysNew1[data-val="3#333"]').hide();
                //$('.DeliveryDaysNew1[data-val="5#334"]').hide();
                //$('.DeliveryDaysNew1[data-val="7#529"]').hide();
                if (oldDelTerm == "3#333") {
                    PLACEORDER.setAssemblyDeliveryDays('7#529');
                }
            }
        }
    },

    setDefaultBoardSeparation: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        PLACEORDER.setBoardSeparation('1');
        $('#ctl00_ContentPlaceHolder1_hdnBoardSeparation').val('1');
        $('#ctl00_ContentPlaceHolder1_DDLboardSep').val('1').change();
    },

    setalternetpcbworkingday: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var workingday = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();
        //var workingday = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').text();

        if (workingday == "3#333") {
            //DDlDelDaysPcb.SelectedValue = "5#334";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('5#334').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('5#334').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('7#529').change();
            //DDLPcbAlterDays1.SelectedValue = "5#334";
            //DDLPcbAlterDays2.SelectedValue = "7#529";
        }
        else if (workingday == "5#334") {
            //DDlDelDaysPcb.SelectedValue = "7#529";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('7#529').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('7#529').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('10#1452').change();
            //DDLPcbAlterDays1.SelectedValue = "7#529";
            //DDLPcbAlterDays2.SelectedValue = "10#1452";


        }
        else if (workingday == "7#529") {
            //DDlDelDaysPcb.SelectedValue = "10#1452";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('10#1452').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('10#1452').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('15#1453').change();
            //DDLPcbAlterDays1.SelectedValue = "10#1452";
            //DDLPcbAlterDays2.SelectedValue = "15#1453";
        }
        else if (workingday == "10#1452") {
            //DDlDelDaysPcb.SelectedValue = "15#1453";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('15#1453').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('15#1453').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('20#7273').change();

            //DDLPcbAlterDays1.SelectedValue = "15#1453";
            //DDLPcbAlterDays2.SelectedValue = "21#7273";

        }
        else if (workingday == "15#1453") {
            //DDlDelDaysPcb.SelectedValue = "21#7273";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('20#7273').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('20#7273').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('25#7272').change();
            //DDLPcbAlterDays1.SelectedValue = "21#7273";
            //DDLPcbAlterDays2.SelectedValue = "28#7272";

        }
        else if (workingday == "20#7273") {
            //DDlDelDaysPcb.SelectedValue = "28#7272";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('25#7272').change();

            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('25#7272').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('25#7272').change();

            //DDLPcbAlterDays1.SelectedValue = "28#7272";
            //DDLPcbAlterDays2.SelectedValue = "28#7272";
        }
        else if (workingday == "25#7272") {

            //DDlDelDaysPcb.SelectedValue = "21#7273";
            $('#ctl00_ContentPlaceHolder1_DDlDelDaysPcb').val('20#7273').change();

            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays1').val('20#7273').change();
            $('#ctl00_ContentPlaceHolder1_DDLPcbAlterDays2').val('20#7273').change();
            //DDLPcbAlterDays1.SelectedValue = "21#7273";
            //DDLPcbAlterDays2.SelectedValue = "21#7273";
        }
    },
    setShowHideBoardSeparation: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var isPCBPower = $("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked");
        if (isPCBPower) {
            $('.BoardSeparation[data-val="3"]').hide();
        }
        else {
            $('.BoardSeparation[data-val="3"]').show();
        }
    },


    setDiffDesignPerPanelValue: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var isPCBPower = $("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked");
        if (isPCBPower) {
            $('#ctl00_ContentPlaceHolder1_hdnDifferentDesignPerPanel').val('1');
            $('.DifferentDesignsperpanel').text('1');
            $('#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel').val('1').change();
        }
    },

    setDistaceBWPCBsByBoardSeparation: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var boardSeparationVal = $("#ctl00_ContentPlaceHolder1_DDLboardSep").val();
        if (boardSeparationVal == "1") {
            $('.DistancebwPCBsNew[data-val="0"]').hide();
            $('.DistancebwPCBsNew[data-val="2"]').show();
        }
        else if (boardSeparationVal == "2") {
            $('.DistancebwPCBsNew[data-val="2"]').hide();
            $('.DistancebwPCBsNew[data-val="0"]').show();
        }
        PLACEORDER.setDistancebwPCBs($('#ctl00_ContentPlaceHolder1_hdnDistancebwPCBs').val());
    },

    CalcStartOutFinish: function () {
        
        PLACEORDER.CheckPCBNameBorderColor();
        var layer;
        var Start;
        var Outer;
        var Inner;
        var material;
        layer = document.getElementById('ctl00_ContentPlaceHolder1_ddlLayers').value;
        Start = document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value;
        Outer = document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value;
        Inner = document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').value;

        material = document.getElementById('ctl00_ContentPlaceHolder1_DDlMaterial').value;
        if (material == "FR4") {
            $('.StartCopperThicknessNew[data-val="0.00"]').show();
            $('.StartCopperThicknessNew[data-val="17.50"]').show();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            $('.StartCopperThicknessNew[data-val="70.00"]').show();

            if (layer == 2180) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "0.00";
                    PLACEORDER.setOuterfinishcuthickness('0.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('0.00');
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "17.50";
                    PLACEORDER.setOuterfinishcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('17.50');
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "70.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "70.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00"; //piyush
                    PLACEORDER.setOuterfinishcuthickness('70.00');//setOuterfinishcuthickness('60.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('70.00'); //$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00'); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") { //piyush else if all commented
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                //    setOuterfinishcuthickness('95.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                //    setOuterfinishcuthickness('105.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "140.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "130.00";
                //    setOuterfinishcuthickness('130.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('130.00');
                //}
            }
            else if (layer == 2181) { // piyush
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "17.50";
                    PLACEORDER.setOuterfinishcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                    PLACEORDER.setOuterfinishcuthickness('60.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "70.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "90.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00"; //piyush
                    PLACEORDER.setOuterfinishcuthickness('90.00'); //setOuterfinishcuthickness('95.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('90.00');//$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00'); //piyush
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") { //piyush else if all commented
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                //    setOuterfinishcuthickness('95.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                //    setOuterfinishcuthickness('105.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
                //}
            }
            else { // piyush whole else
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "17.50";
                    PLACEORDER.setOuterfinishcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('17.50');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('17.50');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('17.50');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('17.50');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                    PLACEORDER.setOuterfinishcuthickness('60.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('35.00');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('35.00');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "70.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "90.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00"; //piyush
                    PLACEORDER.setOuterfinishcuthickness('90.00'); //setOuterfinishcuthickness('95.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('90.00');//$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00'); //piyush
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('70.00');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('70.00');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('70.00');
                }
            }
        }
        else if (material == "MCPCB") {
            $('.StartCopperThicknessNew[data-val="0.00"]').hide();
            $('.StartCopperThicknessNew[data-val="17.50"]').hide();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            $('.StartCopperThicknessNew[data-val="70.00"]').hide();
            if (layer == 2180) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
        else if (material == "RO4350B" || material == "RO4003C" || material == "RT3003" || material == "RO4534" || material == "RO6002" || material == "ITERA-MT-3.38" || material == "ITERA-MT-3.5") {
            $('.StartCopperThicknessNew[data-val="17.50"]').hide();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            $('.StartCopperThicknessNew[data-val="70.00"]').hide();
            if (layer == 2180) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
            else if (layer == 2181) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                    PLACEORDER.setOuterfinishcuthickness('60.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
        else if (material == "RT5880") {
            $('.StartCopperThicknessNew[data-val="17.50"]').show();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            $('.StartCopperThicknessNew[data-val="70.00"]').hide();
            if (layer == 2180 || layer == 2181) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                    PLACEORDER.setOuterfinishcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                    PLACEORDER.setOuterfinishcuthickness('60.00');
                    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
                    $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
    },
    //Calculate outer finish copper thickness
    CalcOuterCUFinish: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var layer;
        var Start;
        var Outer;
        var Inner;
        var material;
        layer = document.getElementById('ctl00_ContentPlaceHolder1_ddlLayers').value;
        Start = document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value;
        Outer = document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value;
        Inner = document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').value;

        material = document.getElementById('ctl00_ContentPlaceHolder1_DDlMaterial').value;
        PLACEORDER.PriceHigherTofinishCU90(0);
        if (material == "FR4") {
            $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="17.50"]').show();
            $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="70.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="90.00"]').show();

            if (layer == 2180) {
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').show();
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide();
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "17.50") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "70.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "70.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00"; //piyush
                    PLACEORDER.setStartcuthickness('70.00');//setOuterfinishcuthickness('60.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('70.00'); //$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00'); //piyush
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") { //piyush else if all commented
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                //    setOuterfinishcuthickness('95.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                //    setOuterfinishcuthickness('105.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "140.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "130.00";
                //    setOuterfinishcuthickness('130.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('130.00');
                //}
            }
            else if (layer == 2181) { // piyush
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').show();
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');

                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "60.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "90.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "70.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00"; //piyush
                    PLACEORDER.setStartcuthickness('70.00'); //setOuterfinishcuthickness('95.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('70.00');//$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00'); //piyush
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                    PLACEORDER.PriceHigherTofinishCU90(1);
                }
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") { //piyush else if all commented
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                //    setOuterfinishcuthickness('95.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
                //}
                //else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                //    document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                //    setOuterfinishcuthickness('105.00');
                //    $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
                //}
            }
            else { // piyush whole else
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').show();
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('17.50');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('17.50');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('17.50');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('17.50');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "60.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('35.00');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('35.00');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "90.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "70.00";//document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00"; //piyush
                    PLACEORDER.setStartcuthickness('70.00'); //setOuterfinishcuthickness('95.00'); //piyush
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('70.00');//$('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00'); //piyush
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    $('.InnercopperthicknessNew[data-val="17.50"]').show();
                    $('.InnercopperthicknessNew[data-val="35.00"]').show();
                    $('.InnercopperthicknessNew[data-val="70.00"]').show();
                    PLACEORDER.setInnercopperthickness('70.00');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('70.00');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('70.00');
                    PLACEORDER.PriceHigherTofinishCU90(1);
                }
            }
        }
        else if (material == "MCPCB") {
            $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide();
            $('.StartCopperThicknessNew[data-val="17.50"]').hide();
            $('.StartCopperThicknessNew[data-val="70.00"]').hide();
            if (layer == 2180) {

                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
        else if (material == "RO4350B" || material == "RO4003C" || material == "RT3003" || material == "RO4534" || material == "RO6002" || material == "ITERA-MT-3.38" || material == "ITERA-MT-3.5") {
            $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide();
            $('.StartCopperThicknessNew[data-val="17.50"]').hide();
            $('.StartCopperThicknessNew[data-val="70.00"]').hide();
            if (layer == 2180) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
            else if (layer == 2181) {
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').hide();
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "60.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
                    $('.OuterfinishcuthicknessNew[data-val="35.00"]').hide();
                    $('.StartCopperThicknessNew[data-val="0.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
        else if (material == "RT5880") {
            $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="17.50"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="35.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="60.00"]').show();
            $('.OuterfinishcuthicknessNew[data-val="70.00"]').hide();
            $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide();
            $('.StartCopperThicknessNew[data-val="17.50"]').show();
            $('.StartCopperThicknessNew[data-val="35.00"]').show();
            if (layer == 2180 || layer == 2181) {
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="0.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                    PLACEORDER.setStartcuthickness('17.50');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
                else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "60.00") {
                    document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                    PLACEORDER.setStartcuthickness('35.00');
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
                    $('.StartCopperThicknessNew[data-val="17.50"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="35.00"]').show(); //piyush
                    $('.StartCopperThicknessNew[data-val="60.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="70.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide(); //piyush
                    $('.StartCopperThicknessNew[data-val="95.00"]').hide(); //piyush

                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                    $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                    $('.InnercopperthicknessNew[data-val="70.00"]').hide();
                    PLACEORDER.setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');
                }
            }
        }
    },

    ChangeWorkingDays: function (selectedWorkingCount) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedWorkingDaysValue = selectedWorkingCount;
            if (selectedWorkingDaysValue == 1) {
                $('#PriceHigherWorkingDays').show();
            }
            else {
                $('#PriceHigherWorkingDays').hide();
            }
        }
        else {
            $('#PriceHigherWorkingDays').hide();
        }
    },

    PriceHigherTofinishCU90: function (selectedWorkingCount) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedWorkingDaysValue = selectedWorkingCount;
            if (selectedWorkingDaysValue == 1) {
                $('#PriceHigherTofinishCU90').show();
            }
            else {
                $('#PriceHigherTofinishCU90').hide();
            }
        }
        else {
            $('#PriceHigherTofinishCU90').hide();
        }
    },

    ChangeImpedanceControl: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueImpedanceControl = selectedValue;
            if (selectedValueImpedanceControl == 1) {
                $('#PriceHigherToImpedanceControl').show();
            }
            else {
                $('#PriceHigherToImpedanceControl').hide();
            }
        }
        else {
            $('#PriceHigherToImpedanceControl').hide();
        }
    },

    ChangeSpecialBuildUp: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueSpecialBuildUp = selectedValue;
            if (selectedValueSpecialBuildUp == 1) {
                $('#ctl00_ContentPlaceHolder1_PriceHigherToSpecialBuildUp').show();
            }
            else {
                $('#ctl00_ContentPlaceHolder1_PriceHigherToSpecialBuildUp').hide();
            }
        }
        else {
            $('#ctl00_ContentPlaceHolder1_PriceHigherToSpecialBuildUp').hide();
        }
    },

    ChangeBlindBurriedVia: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueBlindBurriedVia = selectedValue;
            if (selectedValueBlindBurriedVia == 1) {
                $('#ctl00_ContentPlaceHolder1_PriceHigherToBlindBurriedVia').show();
            }
            else {
                $('#ctl00_ContentPlaceHolder1_PriceHigherToBlindBurriedVia').hide();
            }
        }
        else {
            $('#ctl00_ContentPlaceHolder1_PriceHigherToBlindBurriedVia').hide();
        }
    },

    ChangeTGValue: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueTG = selectedValue;
            if (selectedValueTG == 1) {
                $('#PriceHigherToTG').show();
            }
            else {
                $('#PriceHigherToTG').hide();
            }
        }
        else {
            $('#PriceHigherToTG').hide();
        }
    },

    ChangeBoardThick: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueBoardThick = selectedValue;
            if (selectedValueBoardThick == 1) {
                $('#PriceHigherToBoardThick').show();
            }
            else {
                $('#PriceHigherToBoardThick').hide();
            }
        }
        else {
            $('#PriceHigherToBoardThick').hide();
        }
    },

    ChangeCarbonControl: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueBoardThick = selectedValue;
            if (selectedValueBoardThick == 1) {
                $('#PriceHigherToCarbonControl').show();
            }
            else {
                $('#PriceHigherToCarbonControl').hide();
            }
        }
        else {
            $('#PriceHigherToCarbonControl').hide();
        }
    },

    ChangeSolderMaskTop: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueSMTop = selectedValue;
            if (selectedValueSMTop == 1) {
                $('#PriceHigherToSolderMaskColorTop').show();
            }
            else {
                $('#PriceHigherToSolderMaskColorTop').hide();
            }
        }
        else {
            $('#PriceHigherToSolderMaskColorTop').hide();
        }
    },

    ChangeSolderMaskBottom: function (selectedValue) {
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {
            var selectedValueSMBottom = selectedValue;
            if (selectedValueSMBottom == 1) {
                $('#PriceHigherToSolderMaskColorBottom').show();
            }
            else {
                $('#PriceHigherToSolderMaskColorBottom').hide();
            }
        }
        else {
            $('#PriceHigherToSolderMaskColorBottom').hide();
        }
    },

    CalcStartFinish: function () {
        
        PLACEORDER.CheckPCBNameBorderColor();
        var layer;
        var Start;
        var Outer;
        var Inner;
        layer = document.getElementById('ctl00_ContentPlaceHolder1_ddlLayers').value;  // Layer ID
        Start = document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value;
        Outer = document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value;
        Inner = document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').value;
        if (layer == 2180) {  // 1 layer

            if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "17.50";
                PLACEORDER.setOuterfinishcuthickness('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('17.50');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                PLACEORDER.setOuterfinishcuthickness('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "70.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                PLACEORDER.setOuterfinishcuthickness('60.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                PLACEORDER.setOuterfinishcuthickness('95.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                PLACEORDER.setOuterfinishcuthickness('105.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "140.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "130.00";
                PLACEORDER.setOuterfinishcuthickness('130.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('130.00');
            }
        }
        else {
            if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "17.50") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "35.00";
                PLACEORDER.setOuterfinishcuthickness('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('35.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "35.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "60.00";
                PLACEORDER.setOuterfinishcuthickness('60.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('60.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "70.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                PLACEORDER.setOuterfinishcuthickness('95.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "90.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "95.00";
                PLACEORDER.setOuterfinishcuthickness('95.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('95.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value == "105.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLouterCUThickness').value = "105.00";
                PLACEORDER.setOuterfinishcuthickness('105.00');
                $('#ctl00_ContentPlaceHolder1_hdnouterCUThickness').val('105.00');
            }
        }

        if (layer == 2180 || layer == 2181) {
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').disabled = false;
        }
    },

    CalcOuterFinish: function () {
        debugger;
        PLACEORDER.CheckPCBNameBorderColor();
        var layer;
        var Start;
        var Outer;
        var Inner;
        layer = document.getElementById('ctl00_ContentPlaceHolder1_ddlLayers').value;  // Layer ID
        Start = document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value;
        Outer = document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value;
        Inner = document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').value;
        if (layer == 2180) {  // 1 layer

            if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                PLACEORDER.setStartcuthickness('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "17.50") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                PLACEORDER.setStartcuthickness('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                PLACEORDER.setStartcuthickness('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "70.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "70.00";
                PLACEORDER.setStartcuthickness('70.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('70.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "90.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "95.00";
                PLACEORDER.setStartcuthickness('95.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('95.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "105.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "105.00";
                PLACEORDER.setStartcuthickness('105.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('105.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "140.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "130.00";
                PLACEORDER.setStartcuthickness('130.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('130.00');
            }
        }
        else {
            if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "0.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                PLACEORDER.setStartcuthickness('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "35.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "17.50";
                PLACEORDER.setStartcuthickness('17.50');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('17.50');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "60.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "35.00";
                PLACEORDER.setStartcuthickness('35.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('35.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "90.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "70.00";
                PLACEORDER.setStartcuthickness('70.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('70.00');
            }
            else if (document.getElementById('ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').value == "105.00") {
                document.getElementById('ctl00_ContentPlaceHolder1_DDLStartcopperThickness').value = "105.00";
                PLACEORDER.setStartcuthickness('105.00');
                $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val('105.00');
            }
        }

        if (layer == 2180 || layer == 2181) {
        }
        else {
            document.getElementById('ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').disabled = false;
            document.getElementById('ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').disabled = false;
        }
    },
    OpenLoading: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        scrolltop();

        var restricedWorkingDaysValue = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();

        //17 July 2018
        if (PLACEORDER.RestrictMultiLayersFor3And5Wdays != "") {
            if (restricedWorkingDaysValue == "5#334" || restricedWorkingDaysValue == "7#529") {
                var value_layers = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                if (value_layers != "2180" && value_layers != "2181") {
                    return;
                }
            }
        }
        //17 July 2018

        //6 June 2018
        if (PLACEORDER.RestrictSqMtrText_g1 != "") {
            if (restricedWorkingDaysValue != "15#1453" && restricedWorkingDaysValue != "25#7272") {
                var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                if (hdnSqMtr == "false") {
                    //showwarning('' + RestrictSqMtrText_g1 + '');
                    return;
                }
            }
        }
        else {
            if (PLACEORDER.RestrictSqMtrText_g2 != "") {
                var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                if (restricedWorkingDaysValue != "25#7272") {
                    if (hdnSqMtr == "false") {
                        //showwarning('' + RestrictSqMtrText_g2 + '');
                        return;
                    }
                }
            }
        }
        //6 June 2018

        var restricedWorkingDaysValue = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();
        if (PLACEORDER.restrictedWorkingDaysMsg != '') {
            if (restricedWorkingDaysValue == '3#333') {
                return;
            }
        }

        $(".modal-backdrop").remove();
        //$('#divShowLoadingImage').addClass('fade in');
        //$('#divShowLoadingImage').show();
        $('#divBootstrapPopup').show();
        //$('<div class="modal-backdrop"></div>').appendTo(document.body);
    },

    CloseLoading: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $(".modal-backdrop").remove();
        $('#divShowLoadingImage').removeClass('fade in');
        $('#divShowLoadingImage').hide();
        $('#divBootstrapPopup').hide();
    },
    LaunchInq: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#divLaunchInquiry').removeClass('fade hide');
        $('#divLaunchInquiry').addClass('fade in');
        $('#divLaunchInquiry').show();
        $('#divBootstrapPopup').show();
        $(".modal-backdrop").remove();
        $('<div class="modal-backdrop"></div>').appendTo(document.body);


        //if ($("#ctl00_ContentPlaceHolder1_RRbAssemblyinqYes").prop("checked")) {
        //    //ctl00_ContentPlaceHolder1_RRBinqPanel
        //    $('#ctl00_ContentPlaceHolder1_RRBinqPanel').prop('checked', true);
        //}
    },
    FnColorChange: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var value = $("#ctl00_ContentPlaceHolder1_fpZipFile").val();
        if (value != '') {
            $("#ctl00_ContentPlaceHolder1_fpZipFile").css("color", "#000000");
        }
        else {
            $("#ctl00_ContentPlaceHolder1_fpZipFile").css("color", "#ff0000");
        }
    },

    AddToCart: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#PagePreload').hide();
        $('#divShowDetailsforVerify').addClass('modal fade hide');

        $('#divBootstrapPopup').css('display', 'none');
        $(".modal-backdrop").remove();

        //$('#divShowLoadingImage').addClass('fade in');
        //$('#divShowLoadingImage').show();
        $('#divBootstrapPopup').show();
        //$('<div class="modal-backdrop"></div>').appendTo(document.body);
        return true;
    },

    DIVCLOSECustomizedMatrix: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#divCustomizedMatrix').addClass('modal fade hide');
        $('#divBootstrapPopup').css('display', 'none');
        $(".modal-backdrop").remove();
        return false;
    },
    DIVCLOSECustomizedPCBAssemblyMatrix: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#divCustomizedPCBAssemblyMatrix').addClass('modal fade hide');
        $('#divBootstrapPopup').css('display', 'none');
        $(".modal-backdrop").remove();
        return false;
    },
    DIVCLOSELaunchInquiry: function () {

        PLACEORDER.CheckPCBNameBorderColor();
        $('#divLaunchInquiry').addClass('modal fade hide');
        $('#divBootstrapPopup').css('display', 'none');
        $(".modal-backdrop").remove();
        $('#PagePreload').removeClass('Custommodal Customfade show');
        $('#PagePreload').addClass('Custommodal Customfade hide');
        //$('#PagePreload').hide();        
        return false;
    },

    DIVCLOSE: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $('#divShowDetailsforVerify').addClass('modal fade hide');
        $('#divBootstrapPopup').css('display', 'none');

        $(".modal-backdrop").remove();
        return false;
    },
    checkChooseValidation: function (choose) {
        PLACEORDER.CheckPCBNameBorderColor();
        if (PLACEORDER.restrictedWorkingDaysMsg != '') {
        }

        var pcbName = $('.clsPCBName').val().trim();
        if (pcbName == '') {
            showwarning('Order with this pcb name already exist in system. Please place order with different pcb name.');
            return false;
        }

        var isPCBNameExist = false;
        var parameter = { "pcbName": pcbName, "type": 'pcb' };
        $.ajax({
            type: 'POST',
            url: 'place_order.aspx/CheckPCBName',
            data: JSON.stringify(parameter),
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d > 0) {
                    isPCBNameExist = true;
                    showwarning('Order with this pcb name already exist in system. Please place order with different pcb name.');
                    return false;
                }
            }
        });
        if (isPCBNameExist) {
            return false;
        }

        var isinqNameExist = false;
        var parameter = { "pcbName": pcbName, "type": 'inqpcb' };
        $.ajax({
            type: 'POST',
            url: 'place_order.aspx/CheckPCBName',
            data: JSON.stringify(parameter),
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d > 0) {
                    isinqNameExist = true;
                    $('.clsPCBName').focus();
                    showwarning('Order with this pcb name already exist in system. Please place order with different pcb name.');
                    return false;
                }
            }
        });
        if (isinqNameExist) {
            return false;
        }


        var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
        var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
        if (len == 0) {
            showwarning('Please attach gerber file');
            //return false;
        }
    },

    DivOpen_Cformpending: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        scrolltop();
        var varName = typeof parseFloat(PCB_Dimension_DimxMin);

        //var PCB_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimxMin"].ToString() %>';
        //var PCB_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimxMax"].ToString() %>';
        //var PCB_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimyMin"].ToString() %>';
        //var PCB_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimyMax"].ToString() %>';
        //var PCB_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimxMin"].ToString() %>';
        //var PCB_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimxMax"].ToString() %>';
        //var PCB_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimyMin"].ToString() %>';
        //var PCB_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimyMax"].ToString() %>';

        //var PCB_DPanel_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimxMin"].ToString() %>';
        //var PCB_DPanel_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimxMax"].ToString() %>';
        //var PCB_DPanel_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimyMin"].ToString() %>';
        //var PCB_DPanel_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimyMax"].ToString() %>';
        //var PCB_DPanel_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimxMin"].ToString() %>';
        //var PCB_DPanel_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimxMax"].ToString() %>';
        //var PCB_DPanel_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimyMin"].ToString() %>';
        //var PCB_DPanel_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimyMax"].ToString() %>';

        //var PCB_Panel_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimxMin"].ToString() %>';
        //var PCB_Panel_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimxMax"].ToString() %>';
        //var PCB_Panel_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimyMin"].ToString() %>';
        //var PCB_Panel_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimyMax"].ToString() %>';
        //var PCB_Panel_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimxMin"].ToString() %>';
        //var PCB_Panel_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimxMax"].ToString() %>';
        //var PCB_Panel_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimyMin"].ToString() %>';
        //var PCB_Panel_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimyMax"].ToString() %>';

        var PCB_Dimension_DimxMin = '20';
        var PCB_Dimension_DimxMax = '430';
        var PCB_Dimension_DimyMin = '20';
        var PCB_Dimension_DimyMax = '585';
        var PCB_Dimension_Multilayer_DimxMin = '20';
        var PCB_Dimension_Multilayer_DimxMax = '415';
        var PCB_Dimension_Multilayer_DimyMin = '20';
        var PCB_Dimension_Multilayer_DimyMax = '565';

        var PCB_DPanel_Dimension_DimxMin = '5';
        var PCB_DPanel_Dimension_DimxMax = '430';
        var PCB_DPanel_Dimension_DimyMin = '5';
        var PCB_DPanel_Dimension_DimyMax = '585';
        var PCB_DPanel_Dimension_Multilayer_DimxMin = '5';
        var PCB_DPanel_Dimension_Multilayer_DimxMax = '415';
        var PCB_DPanel_Dimension_Multilayer_DimyMin = '5';
        var PCB_DPanel_Dimension_Multilayer_DimyMax = '565';

        var PCB_Panel_Dimension_DimxMin = '50';
        var PCB_Panel_Dimension_DimxMax = '430';
        var PCB_Panel_Dimension_DimyMin = '50';
        var PCB_Panel_Dimension_DimyMax = '585';
        var PCB_Panel_Dimension_Multilayer_DimxMin = '50';
        var PCB_Panel_Dimension_Multilayer_DimxMax = '415';
        var PCB_Panel_Dimension_Multilayer_DimyMin = '50';
        var PCB_Panel_Dimension_Multilayer_DimyMax = '565';


        var Active = "<%=active%>";
        if (Active == 1031 || Active == 1033) {
            showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
            return false;
        }
        var isUserBlocked = false;
        $.ajax({
            type: 'POST',
            url: 'place_order.aspx/CheckedUserBlocked',
            //data: JSON.stringify(),
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {

                if (msg.d == "1") {
                    isUserBlocked = true;
                    showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                    CloseLoading();
                    return false;
                }
            }
        });
        if (isUserBlocked) {
            return false;
        }


        var restricedWorkingDaysValue = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();
        var RestrictMultiLayersFor3And5Wdays = PLACEORDER.RestrictMultiLayersFor3And5Wdays;
        //17 July 2018
        if (RestrictMultiLayersFor3And5Wdays != "") {
            if (restricedWorkingDaysValue == "5#334" || restricedWorkingDaysValue == "7#529") {
                var value_layers = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                if (value_layers != "2180" && value_layers != "2181") {
                    showwarning('' + RestrictMultiLayersFor3And5Wdays + '');
                    return false;
                }
            }
        }
        //17 July 2018

        //6 June 2018
        //var RestrictSqMtrText_g1 = PLACEORDER.RestrictSqMtrText_g1;
        //var RestrictSqMtrText_g2 = PLACEORDER.RestrictSqMtrText_g2;
        //var RestrictSqMtrText = PLACEORDER.RestrictSqMtrText;
        //var restrictedWorkingDaysMsg = PLACEORDER.restrictedWorkingDaysMsg;


        if (PLACEORDER.RestrictSqMtrText_g1 != "") {
            if (restricedWorkingDaysValue != "15#1453" && restricedWorkingDaysValue != "25#7272") {
                var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                if (hdnSqMtr == "false") {
                    showwarning('' + PLACEORDER.RestrictSqMtrText_g1 + '');
                    return false;
                }
            }
        }
        else {
            if (PLACEORDER.RestrictSqMtrText_g2 != "") {
                var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                if (restricedWorkingDaysValue != "25#7272") {
                    if (hdnSqMtr == "false") {
                        showwarning('' + PLACEORDER.RestrictSqMtrText_g2 + '');
                        return false;
                    }
                }
            }
        }
        //6 June 2018


        if (PLACEORDER.RestrictSqMtrText != "") {
            if (restricedWorkingDaysValue != "25#7272") {
                var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                if (hdnSqMtr == "false") {
                    showwarning('' + PLACEORDER.RestrictSqMtrText + '');
                    return false;
                }
            }
        }

        if (PLACEORDER.restrictedWorkingDaysMsg != '') {
            if (restricedWorkingDaysValue == '3#333') {
                showwarning('' + PLACEORDER.restrictedWorkingDaysMsg + '');
                return false;
            }
        }
        var layerForRestrictML4 = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
        if (layerForRestrictML4 == '2183') {
            if (PLACEORDER.restrictedWdaysMsgForML4 != '') {
                if (restricedWorkingDaysValue == '5#334') {
                    showwarning('' + PLACEORDER.restrictedWdaysMsgForML4 + '');
                    return false;
                }
            }
        }

        var pcbName = $('.clsPCBName').val().trim();
        if (pcbName == '') {
            showwarning('Please Enter PCB Name.');
            PLACEORDER.CheckPCBNameBorderColor();
            return false;
        }


        var QuantityNew = $("#ctl00_ContentPlaceHolder1_txtQuantityNew").val();
        if (QuantityNew == '' || QuantityNew == '0') {
            showwarning('Please enter quantity.');
            return false;
        }


        var Dimensionx = $('.selectorText').val().trim();
        if (Dimensionx == '') {
            showwarning('Please enter a value for Dimension X.');
            return false;
        }

        var Dimensiony = $("#ctl00_ContentPlaceHolder1_txtDimY").val();
        if (Dimensiony == '') {
            showwarning('Please enter a value for Dimension Y.');
            return false;
        }

        var isPCBNameExist = false;
        var parameter = { "pcbName": pcbName, "type": 'pcb' };
        $.ajax({
            type: 'POST',
            url: 'place_order.aspx/CheckPCBName',
            data: JSON.stringify(parameter),
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d > 0) {
                    isPCBNameExist = true;
                    showwarning('Order with this pcb name already exist in system. Please place order with different pcb name.');
                    return false;
                }
            }
        });
        if (isPCBNameExist) {
            return false;
        }

        var isinqPCBNameExist = false;
        parameter = { "pcbName": pcbName, "type": 'inqpcb' };
        $.ajax({
            type: 'POST',
            url: 'place_order.aspx/CheckPCBName',
            data: JSON.stringify(parameter),
            async: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg) {
                if (msg.d > 0) {
                    isinqPCBNameExist = true;
                    $('.clsPCBName').focus();
                    showwarning('Order with this pcb name already exist in system. Please place order with different pcb name.');
                    return false;
                }
            }
        });
        if (isinqPCBNameExist) {
            return false;
        }
        //
        // $("#txtPCBName").val().replace(/ /g,'').length
        //var pcbnamelength = $('#txtPCBName').val().replace(/ /g,'').length
        //if (pcbnamelength > 20) {
        //    showwarning('please enter name between 0 to 20 characters.');
        //    return false;
        //}
        var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
        var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
        if (len == 0) {
            showwarning('Please attach gerber file');
            return false;
        }
        else {
            var ext = file[0].name.split('.').pop().toLowerCase();
            if ($.inArray(ext, ['zip', 'rar']) == -1) {
                showwarning('Please attach .ZIP or .RAR file');
                return false;
            }
        }
        var layer = document.getElementById("ctl00_ContentPlaceHolder1_ddlLayers");
        var checkLayer = layer.options[layer.selectedIndex].value;
        var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
        if (material == "FR4") {

            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < typeof parseFloat(PCB_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_Dimension_DimxMin + ' to ' + PCB_Dimension_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_Multilayer_DimyMin + ' to ' + PCB_Dimension_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_Multilayer_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_Dimension_Multilayer_DimxMin + ' to ' + PCB_Dimension_Multilayer_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_Multilayer_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_DimyMin + ' to ' + PCB_Dimension_Multilayer_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
        }
        else {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_Dimension_DimxMin + ' to ' + PCB_Dimension_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_Multilayer_DimyMin + ' to ' + PCB_Dimension_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_Multilayer_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_Dimension_Multilayer_DimxMin + ' to ' + PCB_Dimension_Multilayer_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_DimyMin) || parseFloat(PCBDimensionY) >= parseFloat(PCB_Dimension_Multilayer_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_DimyMin + ' to ' + PCB_Dimension_Multilayer_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
        }

        if (material == "FR4") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_DimxMin + ' to ' + PCB_DPanel_Dimension_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_DimyMin + ' to ' + PCB_DPanel_Dimension_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_Multilayer_DimxMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_Multilayer_DimyMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
        }
        else {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_DimxMin + ' to ' + PCB_DPanel_Dimension_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_DimyMin + ' to ' + PCB_DPanel_Dimension_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                    if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMax)) {
                        showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_Multilayer_DimxMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimxMax + ' mm.');
                        return false;
                    }
                    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                    if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMax)) {
                        showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_Multilayer_DimyMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimyMax + ' mm.');
                        return false;
                    }
                }
            }
        }
        if (material == "FR4") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) >= parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
        }
        else {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
        }

        if (material == "FR4") {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNewCust').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
        }
        else {
            if (checkLayer == "2180" || checkLayer == "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNewCust').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
            if (checkLayer != "2180" && checkLayer != "2181") {
                if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                    if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                        var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                        if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                            showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                            return false;
                        }
                        var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                        if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                            showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                            return false;
                        }
                    }
                }
            }
        }


        if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
            var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile')[0].files;
            var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').get(0).files.length;
            if (len == 0) {
                showwarning('Please attach BOM file');
                return false;
            }
            else {
                var ext = file[0].name.split('.').pop().toLowerCase();
                if ($.inArray(ext, ['xlsx', 'xls', 'csv']) == -1) {
                    showwarning('Please attach .XLSX or .XLS or .CSV file');
                    return false;
                }
            }
            var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile')[0].files;
            var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').get(0).files.length;
            if (len == 0) {
                showwarning('Please attach pick and place file');
                return false;
            }
            else {
                var ext = file[0].name.split('.').pop().toLowerCase();
                if ($.inArray(ext, ['txt', 'xls', 'csv', 'xlsx',]) == -1) {
                    showwarning('Please attach .txt or .xls or .xlsx or .csv file');
                    return false;
                }
            }

            var txtSMD = $('#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents').val();
            var txtBga = $('#ctl00_ContentPlaceHolder1_TxtAssemblyBgaTqfpComponents').val();
            var ddlAssStencilSide = $("#ctl00_ContentPlaceHolder1_ddlAssemblyStencilSide");
            var AssemblySelText = ddlAssStencilSide.find("option:selected").text();

            if ((txtSMD > 0 || txtBga > 0) && AssemblySelText == "None") {

                showwarning('Please select stencil side first.');
                return false;
            }
            else if (txtSMD <= 0 && txtBga <= 0 && AssemblySelText != "None") {
                showwarning('Please select stencil side as None.');
                return false;
            }
        }




        var Individual = $('#ctl00_ContentPlaceHolder1_hdnIndividual').val();

        //var Individual = document.getElementById("<%= hdnIndividual.ClientID %>").value;
        if (Individual == 1) {
            PLACEORDER.GetTechnicalData()
            $('#divShowDetailsforVerify').removeClass('fade hide');
            $('#divShowDetailsforVerify').addClass('fade in');
            $('#divShowDetailsforVerify').show();
            $('#divBootstrapPopup').show();
            $('<div class="modal-backdrop"></div>').appendTo(document.body);
            return false;
        }
    },
    GetTechnicalData: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        var txtPCBName = $("#ctl00_ContentPlaceHolder1_txtPCBName").val();
        $("#ctl00_ContentPlaceHolder1_lblpopupPCBName").text(txtPCBName);
        // $("#<%=lblpopupPCBName.ClientID%>").text(txtPCBName);
        var ddllayers = $("#ctl00_ContentPlaceHolder1_ddlLayers");


        var layerselectedText = ddllayers.find("option:selected").text();

        $("#ctl00_ContentPlaceHolder1_lblpopupLayer").text(layerselectedText);
        // $("#<%=lblpopupLayer.ClientID%>").text(layerselectedText);

        if ($("#ctl00_ContentPlaceHolder1_RRBsingleboard").prop("checked")) {
            // $("#<%=lblpopupDispatchUnit.ClientID%>").text('Single Board');
            $("#ctl00_ContentPlaceHolder1_lblpopupDispatchUnit").text('Single Board');
            var ttxtqty = $("#ctl00_ContentPlaceHolder1_txtQuantity").val(); // Quantity
            $("#ctl00_ContentPlaceHolder1_lblpopupQTY").text(ttxtqty + ' PCB');;

            // $("#<%=lblpopupQTY.ClientID%>").text(ttxtqty + ' PCB');

            $("#td1").hide();
            $("#td2").hide();
            $("#td3").hide();
            $("#td4").hide();
            $("#td5").hide();
            $("#td6").hide();
            $("#td7").hide();
            $("#td8").hide();
            $("#td9").hide();
            $("#td10").hide();
            $("#td11").hide();
            $("#td12").hide();
            $("#td13").hide();
            $("#td14").hide();
            $("#td15").hide();
            $("#td16").hide();
            $("#td17").hide();
            $("#td18").hide();
            $("#td19").hide();
            $("#td20").hide();
            $("#td21").hide();
            $("#td22").hide();
            $(["#tdHeader"]).attr('colspan', 2);
        }
        else {
            $("#td1").show();
            $("#td2").show();
            $("#td3").show();
            $("#td4").show();
            $("#td5").show();
            $("#td6").show();
            $("#td7").show();
            $("#td8").show();
            $("#td9").show();
            $("#td10").show();
            $("#td11").show();
            $("#td12").show();
            $("#td13").show();
            $("#td14").show();
            $("#td15").show();
            $("#td16").show();
            $("#td17").show();
            $("#td18").show();
            $("#td19").show();
            $("#td20").show();
            $("#td21").show();
            $("#td22").show();
            $(["#tdHeader"]).attr('colspan', 4);
            //$("#<%=lblpopupDispatchUnit.ClientID%>").text('Panel');

            $("#ctl00_ContentPlaceHolder1_lblpopupDispatchUnit").text('Panel');
            var ttxtqty = $("#ctl00_ContentPlaceHolder1_txtQuantity").val(); // Quantity

            $("#ctl00_ContentPlaceHolder1_lblpopupQTY").text(ttxtqty + ' PANEL');
            //$("#<%=lblpopupQTY.ClientID%>").text(ttxtqty + ' PANEL');

            if ($("#ctl00_ContentPlaceHolder1_RRBCustomer").prop("checked")) {
                // $("#<%=lblpopupPanelBy.ClientID%>").text('Customer');

                $("#ctl00_ContentPlaceHolder1_lblpopupPanelBy").text('Customer');
            }
            else {
                //$("#<%=lblpopupPanelBy.ClientID%>").text('PCBPower');

                $("#ctl00_ContentPlaceHolder1_lblpopupPanelBy").text('PCBPower');
            }
            if ($("#ctl00_ContentPlaceHolder1_RRBQtyUnit_0").prop("checked")) {
                // $("#<%=lblpopupOrderQTY.ClientID%>").text('PCB');

                $("#ctl00_ContentPlaceHolder1_lblpopupOrderQTY").text('PCB');
            }
            else {
                $("#ctl00_ContentPlaceHolder1_lblpopupOrderQTY").text('PANEL');

                //$("#<%=lblpopupOrderQTY.ClientID%>").text('PANEL');
            }
        }

        var txtdimX = $("#ctl00_ContentPlaceHolder1_txtDimX").val();
        // $("#<%=lblpopupDimX.ClientID%>").text(txtdimX);

        $("#ctl00_ContentPlaceHolder1_lblpopupDimX").text(txtdimX);

        var txtdimY = $("#ctl00_ContentPlaceHolder1_txtDimY").val();
        //$("#<%=lblpopupDimY.ClientID%>").text(txtdimY);

        $("#ctl00_ContentPlaceHolder1_lblpopupDimY").text(txtdimY);

        var ddlsurface = $("#ctl00_ContentPlaceHolder1_DDLsurfacefinish");
        var surfaceselectedText = ddlsurface.find("option:selected").text();
        //$("#<%=lblpopupSurface.ClientID%>").text(surfaceselectedText);

        $("#ctl00_ContentPlaceHolder1_lblpopupSurface").text(surfaceselectedText);

        var ddladdress = $("#ctl00_ContentPlaceHolder1_ddlDelAddr");
        var addresseselectedText = ddladdress.find("option:selected").text();
        //$("#<%=lblpopupAddress.ClientID%>").text(addresseselectedText);

        $("#ctl00_ContentPlaceHolder1_lblpopupAddress").text(addresseselectedText);

        var ddlinvaddress = $("#ctl00_ContentPlaceHolder1_ddlInvAddr");
        var invaddresseselectedText = ddlinvaddress.find("option:selected").text();
        // $("#<%=lblpopupInvAddr.ClientID%>").text(invaddresseselectedText);

        $("#ctl00_ContentPlaceHolder1_lblpopupInvAddr").text(invaddresseselectedText);

        var ddlDelivery = $("#ctl00_ContentPlaceHolder1_ddlDelTerms");
        var deliveryselectedText = ddlDelivery.find("option:selected").text();
        // $("#<%=lblpopupDelivery.ClientID%>").text(deliveryselectedText);

        $("#ctl00_ContentPlaceHolder1_lblpopupDelivery").text(deliveryselectedText);

        var ddlDiffDesign = $("#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel");
        var DiffDesignselectedText = ddlDiffDesign.find("option:selected").text();
        //$("#<%=lblpopupDiffDesign.ClientID%>").text(DiffDesignselectedText);

        $("#ctl00_ContentPlaceHolder1_lblpopupDiffDesign").text(deliveryselectedText);

        var ttxPCBorPanel = $("#ctl00_ContentPlaceHolder1_txtTotlaPCBBoard").val();
        // $("#<%=lblpopupPCBorPanel.ClientID%>").text(ttxPCBorPanel);

        $("#ctl00_ContentPlaceHolder1_lblpopupPCBorPanel").text(ttxPCBorPanel);

        var txtRepeatX = $("#ctl00_ContentPlaceHolder1_txtX").val();
        // $("#<%=lblpopupRepeatX.ClientID%>").text(txtRepeatX);
        $("#ctl00_ContentPlaceHolder1_lblpopupRepeatX").text(txtRepeatX);


        var txtRepeatY = $("#ctl00_ContentPlaceHolder1_txtY").val();
        // $("#<%=lblpopupRepeatY.ClientID%>").text(txtRepeatY);

        $("#ctl00_ContentPlaceHolder1_lblpopupRepeatY").text(txtRepeatY);

        var ddlBoardSepra = $("#ctl00_ContentPlaceHolder1_DDLboardSep");
        var BoardSepraselectedText = ddlBoardSepra.find("option:selected").text();
        //$("#<%=lblpopupBoardSepra.ClientID%>").text(BoardSepraselectedText);
        $("#ctl00_ContentPlaceHolder1_lblpopupBoardSepra").text(BoardSepraselectedText);


        var ddlDistancePCB = $("#ctl00_ContentPlaceHolder1_DDLDistBetPCB");
        var DistancePCBselectedText = ddlDistancePCB.find("option:selected").text();
        //$("#<%=lblpopupDistancePCB.ClientID%>").text(DistancePCBselectedText);
        $("#ctl00_ContentPlaceHolder1_lblpopupDistancePCB").text(DistancePCBselectedText);


        var ddlPanelBorder = $("#ctl00_ContentPlaceHolder1_DDLPanelBorder");
        var PanelBorderselectedText = ddlPanelBorder.find("option:selected").text();
        // $("#<%=lblpopupPanelBorder.ClientID%>").text(PanelBorderselectedText);
        $("#ctl00_ContentPlaceHolder1_llblpopupPanelBorder").text(PanelBorderselectedText);


        var txtPaneldimX = $("#ctl00_ContentPlaceHolder1_txtpaneldimX").val();
        //$("#<%=lblpopupPanelDimX.ClientID%>").text(txtPaneldimX);
        $("#ctl00_ContentPlaceHolder1_lblpopupPanelDimX").text(txtPaneldimX);


        var txtPaneldimY = $("#ctl00_ContentPlaceHolder1_txtpaneldimY").val();
        //$("#<%=lblpopupPanelDimY.ClientID%>").text(txtPaneldimY);

        $("#ctl00_ContentPlaceHolder1_lblpopupPanelDimY").text(txtPaneldimY);

        if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
            var lblUnitPrice = $("#ctl00_ContentPlaceHolder1_lblPriceUntPcb").text();
            //$("#<%=lblpopupUnitPrice.ClientID%>").text(lblUnitPrice);

            $("#ctl00_ContentPlaceHolder1_lblpopupUnitPrice").text(lblUnitPrice);

            var lblTotalPrice = $("#ctl00_ContentPlaceHolder1_lblPriceOrderPcb").text();
            //$("#<%=lblpopupTotalPrice.ClientID%>").text(lblTotalPrice);
            $("#ctl00_ContentPlaceHolder1_lblpopupTotalPrice").text(lblTotalPrice);
        }
        else if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').is(":checked")) {
            var lblUnitPrice = $("#ctl00_ContentPlaceHolder1_lblPcbUnitPrice1").text();
            //$("#<%=lblpopupUnitPrice.ClientID%>").text(lblUnitPrice);

            $("#ctl00_ContentPlaceHolder1_lblpopupUnitPrice").text(lblUnitPrice);

            var lblTotalPrice = $("#ctl00_ContentPlaceHolder1_lblPcbOrderPrice1").text();
            // $("#<%=lblpopupTotalPrice.ClientID%>").text(lblTotalPrice);
            $("#ctl00_ContentPlaceHolder1_lblpopupTotalPrice").text(lblTotalPrice);

        }

        if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
            $("#divAssdata").show();
            var lblAssemblyQty = $("#ctl00_ContentPlaceHolder1_TxtAssemblyQty").val();
            //$("#<%=lblAssQty.ClientID%>").text(lblAssemblyQty);

            $("#ctl00_ContentPlaceHolder1_lblAssQty").text(lblAssemblyQty);

            var ddlAssDelivery = $("#ctl00_ContentPlaceHolder1_ddlAssemblyDelTerms");
            var deliveryselectedText = ddlAssDelivery.find("option:selected").text();
            //$("#<%=lblAssDays.ClientID%>").text(deliveryselectedText);

            $("#ctl00_ContentPlaceHolder1_lblAssDays").text(deliveryselectedText);

            var lblAssemblyNum = $("#ctl00_ContentPlaceHolder1_TxtAssembleComponent").val();
            //$("#<%=lblNumComponent.ClientID%>").text(lblAssemblyNum);

            $("#ctl00_ContentPlaceHolder1_lblNumComponent").text(lblAssemblyNum);

            var lblAsseSMDCom = $("#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents").val();
            //$("#<%=lblSMDComponent.ClientID%>").text(lblAsseSMDCom);

            $("#ctl00_ContentPlaceHolder1_lblSMDComponent").text(lblAsseSMDCom);

            var lblAssHoleCom = $("#ctl00_ContentPlaceHolder1_AssemblyHoleComponents").val();
            //$("#<%=lblNumberThComponent.ClientID%>").text(lblAssHoleCom);
            $("#ctl00_ContentPlaceHolder1_lblNumberThComponent").text(lblAssHoleCom);


            var lblAssBGaCom = $("#ctl00_ContentPlaceHolder1_TxtAssemblyBgaTqfpComponents").val();
            // $("#<%=lblBGATQFPComponents.ClientID%>").text(lblAssBGaCom);
            $("#ctl00_ContentPlaceHolder1_lblBGATQFPComponents").text(lblAssBGaCom);


            var ddlAssSide = $("#ctl00_ContentPlaceHolder1_DDLAssemblyStencil");
            var AssemblySelText = ddlAssSide.find("option:selected").text();
            // $("#<%=lblAssSide.ClientID%>").text(AssemblySelText);

            $("#ctl00_ContentPlaceHolder1_lblAssSide").text(AssemblySelText);
            if (AssemblySelText == 'Top Stencil') {
                // $("#<%=lblAssSide.ClientID%>").text('Top');
                $("#ctl00_ContentPlaceHolder1_lblAssSide").text('Top');

            }
            else if (AssemblySelText == 'Bottom Stencil') {
                //$("#<%=lblAssSide.ClientID%>").text('Bottom');
                $("#ctl00_ContentPlaceHolder1_lblAssSide").text('Bottom');

            }
            else if (AssemblySelText == 'Top & Bottom Stencil') {
                // $("#<%=lblAssSide.ClientID%>").text('Both');

                $("#ctl00_ContentPlaceHolder1_lblAssSide").text('Both');
            }

            var ddlAssComponent = $("#ctl00_ContentPlaceHolder1_ddl_comp_type");
            var AssComponentSelText = ddlAssComponent.find("option:selected").text();
            // $("#<%=lblCpmonentSourcing.ClientID%>").text(AssComponentSelText);

            $("#ctl00_ContentPlaceHolder1_lblCpmonentSourcing").text(AssComponentSelText);

            var lblAssUnitPrice = $("#ctl00_ContentPlaceHolder1_lblPriceUntAssembly").text();
            //$("#<%=lblAssUnitPrice.ClientID%>").text(lblAssUnitPrice);

            $("#ctl00_ContentPlaceHolder1_lblAssUnitPrice").text(lblAssUnitPrice);

            var lblAssTotalPrice = $("#ctl00_ContentPlaceHolder1_lblPriceOrderAssembly").text();
            //$("#<%=lblAssTotalPrice.ClientID%>").text(lblAssTotalPrice);
            $("#ctl00_ContentPlaceHolder1_lblAssTotalPrice").text(lblAssTotalPrice);



        }
        if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').is(":checked")) {
            $("#divAssdata").hide();
        }
    },



    toolTipEffect: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        $(document).ready(function () {
            $('[data-toggle=tooltip]').tooltip();
        });
    },
    topFunction: function () {
        PLACEORDER.CheckPCBNameBorderColor();
        scrolltop();
    },
    events: function () {


        var isAsseCheckedqty = $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').prop('checked');
        var ispanelCheckedqty = $('#ctl00_ContentPlaceHolder1_RRBPanelNew').prop('checked');
        $(document).ready(function () {
            $('#ctl00_ContentPlaceHolder1_fpOrderFile').on('click', function () {
                $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                $('#ctl00_ContentPlaceHolder1_myProgress').hide();
            });
            $('#ctl00_ContentPlaceHolder1_fpPO').on('click', function () {
                $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                $('#ctl00_ContentPlaceHolder1_myProgress').hide();
            });
            $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').on('click', function () {
                $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                $('#ctl00_ContentPlaceHolder1_myProgress').hide();
            });
            $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').on('click', function () {
                $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                $('#ctl00_ContentPlaceHolder1_myProgress').hide();
            });
            $('#ctl00_ContentPlaceHolder1_fpPO').change(function () {

                var file = $('#ctl00_ContentPlaceHolder1_fpPO')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpPO').get(0).files.length;
                if (len == 0) {
                    $('.temcheckremarkspo').removeClass('removecheckmarkpo');
                    $('.temcheckremarkspo').addClass('checkmarkpo');
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    $('#ctl00_ContentPlaceHolder1_myProgressPo').show();
                    $('#ctl00_ContentPlaceHolder1_myProgressPoClass').show();
                    setTimeout(function () {
                        $('#ctl00_ContentPlaceHolder1_myProgressPo').hide();
                        //$('#ctl00_ContentPlaceHolder1_myProgressPoClass').hide();
                        //$('#ctl00_ContentPlaceHolder1_myProgresspoclose').show();
                        $('.temcheckremarkspo').addClass('removecheckmarkpo');
                        $('.temcheckremarkspo').removeClass('checkmarkpo');
                    }, 1500);
                }
            });
            $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').change(function () {

                var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').get(0).files.length;
                if (len == 0) {
                    $('.temcheckremarkspic').removeClass('removecheckmarkpic');
                    $('.temcheckremarkspic').addClass('checkmarkpic');
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    if (ext == 'xlsx' || ext == 'xls' || ext == 'csv' || ext == 'txt') {

                        $('#ctl00_ContentPlaceHolder1_myProgressasspic').show();
                        setTimeout(function () {
                            $('#ctl00_ContentPlaceHolder1_myProgressasspic').hide();
                            //$('#ctl00_ContentPlaceHolder1_myProgressasspicclose').show();
                            $('.temcheckremarkspic').addClass('removecheckmarkpic');
                            $('.temcheckremarkspic').removeClass('checkmarkpic');
                        }, 1500);
                    }
                    else {
                        scrolltop();
                        $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgresspoclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressassbomclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressasspicclose').hide();
                        $('.temcheckremarkspic').removeClass('removecheckmarkpic');
                        $('.temcheckremarkspic').addClass('checkmarkpic');
                        showwarning('Please upload Gerber data in .XLSX/.XLS/.CSV/.TXT format.');
                    }
                }
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').change(function () {
                var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').get(0).files.length;
                if (len == 0) {
                    $('.temcheckremarksbom').removeClass('removecheckmarkbom');
                    $('.temcheckremarksbom').addClass('checkmarkbom');
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    if (ext == 'xlsx' || ext == 'xls' || ext == 'csv') {

                        $('#ctl00_ContentPlaceHolder1_myProgressassbom').show();
                        setTimeout(function () {
                            $('#ctl00_ContentPlaceHolder1_myProgressassbom').hide();
                            //$('#ctl00_ContentPlaceHolder1_myProgressassbomclose').show();
                            $('.temcheckremarksbom').addClass('removecheckmarkbom');
                            $('.temcheckremarksbom').removeClass('checkmarkbom');
                        }, 1500);
                    }
                    else {
                        scrolltop();
                        $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgresspoclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressassbomclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressasspicclose').hide();
                        $('.temcheckremarksbom').removeClass('removecheckmarkbom');
                        $('.temcheckremarksbom').addClass('checkmarkbom');
                        showwarning('Please upload Gerber data in .XLSX/.XLS/.CSV format.');
                    }
                }
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('#ctl00_ContentPlaceHolder1_fpOrderFile').change(function () {

                var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
                if (len == 0) {
                    $('.temcheckremarks').removeClass('removecheckmark');
                    $('.temcheckremarks').addClass('checkmark');
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    if (ext == 'zip' || ext == 'rar') {
                        $('#ctl00_ContentPlaceHolder1_myProgress').show();
                        //$('#ctl00_ContentPlaceHolder1_progressbarpercentage').show();
                        var i = 0;

                        setTimeout(function () {
                            $('#ctl00_ContentPlaceHolder1_myProgress').hide();
                            //$('#ctl00_ContentPlaceHolder1_myProgressclose').show();
                            $('.temcheckremarks').addClass('removecheckmark');
                            $('.temcheckremarks').removeClass('checkmark');
                        }, 1500);
                    }
                    else {
                        scrolltop();
                        $('#ctl00_ContentPlaceHolder1_myProgressclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgresspoclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressassbomclose').hide();
                        $('#ctl00_ContentPlaceHolder1_myProgressasspicclose').hide();
                        $('.temcheckremarks').removeClass('removecheckmark');
                        $('.temcheckremarks').addClass('checkmark');
                        showwarning('Please upload Gerber data in .ZIP/.RAR format.');
                    }
                }
                PLACEORDER.CheckPCBNameBorderColor();
            });

            $('.selecter').click(function ($e) {
                $e.preventDefault();
            });

            if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                $('#ctl00_ContentPlaceHolder1_hdnDifferentDesignPerPanel').val('1');
                $('.DifferentDesignsperpanel').text('1');
                $('#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel').val('1').change();
            }

            $("#ctl00_ContentPlaceHolder1_RRBsingleboardNew").live('click', function () {
                var issingleboard = $("#ctl00_ContentPlaceHolder1_RRBsingleboard").prop("checked");
                if (!issingleboard) {
                    PLACEORDER.showPriceLoading();
                }
            });
            $("#ctl00_ContentPlaceHolder1_RRBPanelNew").live('click', function () {
                var ispanel = $("#ctl00_ContentPlaceHolder1_RRBPanel").prop("checked");
                if (!ispanel) {
                    PLACEORDER.showPriceLoading();
                }
            });
            $("#chkTechOptions,#chkPCBOptions").live("click", function (e) {
                if (!$(e.target).hasClass("clsincludeclick")) {
                    return false;
                }
                if ($(this).find('.special_options_nav').hasClass('active')) {
                    $(this).find('.special_options_nav').removeClass('active');
                    $(this).find('.special_options_wrap').hide();
                }
                else {
                    $(this).find('.special_options_nav').addClass('active');
                    $(this).find('.special_options_wrap').show();
                }
            });
            $("#chkAssemblyptions").live("click", function (e) {
                if (!$(e.target).hasClass("clsincludeclick")) {
                    return false;
                }
                if ($(this).find('.special_options_nav').hasClass('active')) {
                    $(this).find('.special_options_nav').removeClass('active');
                    $(this).find('.special_options_wrap').hide();
                }
                else {
                    $(this).find('.special_options_nav').addClass('active');
                    $(this).find('.special_options_wrap').show();
                }
            });
            $(".clsPCBName").blur(function (e) {

                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsPCBName').live('change', function () {

                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol").blur(function (e) {

                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol1").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol1').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol2").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol2').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol3").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol3').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol4").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol4').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol5").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol5').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol6").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol6').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol7").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol7').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $(".clsbordercolorcontrol8").blur(function (e) {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('.clsbordercolorcontrol8').live('change', function () {
                PLACEORDER.CheckPCBNameBorderColor();
            });
            $('#ctl00_ContentPlaceHolder1_RRBAssemblyNo').live("click", function (e) {
                $("#lblQtyNew").html('Total PCB quantity <span class="reqfld"></span>');
                $('.divAssemblydata').addClass('Assemblyhidden');
                // $('.Assemblyclas').addClass('Assemblyclass');
                $("#ctl00_ContentPlaceHolder1_Divxlsfile").hide();
                $("#ctl00_ContentPlaceHolder1_divtxtfile").hide();
                $("#ctl00_ContentPlaceHolder1_DivAssemblydays").hide();
                $("#ctl00_ContentPlaceHolder1_divHideAssembly").hide();
                $("#ctl00_ContentPlaceHolder1_DivComponentDays").hide();
                $("#ctl00_ContentPlaceHolder1_AssemblywithPcbCalculater").hide();
                $("#ctl00_ContentPlaceHolder1_DivPcbCalculater").show();
                $("#ctl00_ContentPlaceHolder1_DivBomSampleFile").hide();

                $("#ctl00_ContentPlaceHolder1_DivText").hide();
            });
            $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').live("click", function (e) {
                $("#lblQtyNew").html('Total Panel quantity <span class="reqfld"></span>');
                $('.divAssemblydata').removeClass('Assemblyhidden');
                // $('.Assemblyclas').removeClass('Assemblyclass');
                $("#ctl00_ContentPlaceHolder1_Divxlsfile").show();
                $("#ctl00_ContentPlaceHolder1_divtxtfile").show();
                $("#ctl00_ContentPlaceHolder1_divHideAssembly").show();
                $("#ctl00_ContentPlaceHolder1_DivAssemblydays").show();
                $("#ctl00_ContentPlaceHolder1_DivComponentDays").show();
                $("#ctl00_ContentPlaceHolder1_AssemblywithPcbCalculater").show();
                $("#ctl00_ContentPlaceHolder1_DivPcbCalculater").hide();
                $("#chkAssemblyptions").trigger("click");
                $("#ctl00_ContentPlaceHolder1_DivBomSampleFile").show();

                $("#ctl00_ContentPlaceHolder1_DivText").show();
            });
            $('#ctl00_ContentPlaceHolder1_RRBPanelNew').live("click", function (e) {
                $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val("5");
            });
            $('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').live("click", function (e) {
                $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val("20");
            });
            $(".clseg").live("mouseenter", function () {
                $('.eg-img').css('display', 'block');
            }).live('mouseleave', function () {
                $('.eg-img').css('display', 'none');
            });

            $('#ctl00_ContentPlaceHolder1_btnPlaceInquiry').live('click', function () {
                $('#PagePreload').hide();
                //    var pcbnamelength = $('#ctl00_ContentPlaceHolder1_txtpcbnameInquiry').val().replace(/ /g,'').length
                //if (pcbnamelength > 20) {
                //    showwarning('please enter PCBName between 0 to 20 characters.');
                //    return false;
                //}
                var pcbName = $('#ctl00_ContentPlaceHolder1_txtpcbnameInquiry').val().trim();
                if (pcbName == '') {
                    showwarning('Please Enter PCB Name.');
                    return false;
                }

                var isInqPCBNameExist = false;
                var parameter = { "pcbName": pcbName, "type": 'inqpcb' };
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckPCBName',
                    data: JSON.stringify(parameter),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.d > 0) {
                            isInqPCBNameExist = true;
                            $('.clsPCBName').focus();
                            showwarning('PCB name already exist in system. Please place inquiry with different pcb name.');
                            return false;
                        }
                    }
                });
                if (isInqPCBNameExist) {
                    return false;
                }
                var isUserBlocked = false;
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckedUserBlocked',
                    //data: JSON.stringify(),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {

                        if (msg.d == "1") {
                            isUserBlocked = true;
                            showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                            return false;
                        }
                    }
                });
                if (isUserBlocked) {
                    return false;
                }

                var isPCBNameExist = false;
                parameter = { "pcbName": pcbName, "type": 'pcb' };
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckPCBName',
                    data: JSON.stringify(parameter),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.d > 0) {
                            isPCBNameExist = true;
                            showwarning('PCB name already exist in system. Please place inquiry with different pcb name.');
                            return false;
                        }
                    }
                });
                if (isPCBNameExist) {
                    return false;
                }
                var file_size = $('#ctl00_ContentPlaceHolder1_fpZipFile')[0].files[0].size;
                if (file_size > 7000000) {
                    showwarning('Maximum uploading file size is 7 MB.');
                    return false;
                    return false;
                }
                var file = $('#ctl00_ContentPlaceHolder1_fpZipFile')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpZipFile').get(0).files.length;
                if (len == 0) {
                    showwarning('Please upload only a single .ZIP or .RAR design file for an inquiry.');
                    return false;
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    if ($.inArray(ext, ['zip', 'rar']) == -1) {
                        showwarning('Please upload only a single .ZIP or .RAR design file for an inquiry.');
                        return false;
                    }
                }
                $('#PagePreload').hide();
            });

            $('#ctl00_ContentPlaceHolder1_btnGenerateOfferMatrixNew').live('click', function () {
                scrolltop();
                //var PCB_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimxMin"].ToString() %>';
                //var PCB_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimxMax"].ToString() %>';
                //var PCB_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimyMin"].ToString() %>';
                //var PCB_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_SingleDoubleLayer_DimyMax"].ToString() %>';
                //var PCB_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimxMin"].ToString() %>';
                //var PCB_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimxMax"].ToString() %>';
                //var PCB_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimyMin"].ToString() %>';
                //var PCB_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_SingleBoard_MultiLayer_DimyMax"].ToString() %>';

                //var PCB_DPanel_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimxMin"].ToString() %>';
                //var PCB_DPanel_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimxMax"].ToString() %>';
                //var PCB_DPanel_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimyMin"].ToString() %>';
                //var PCB_DPanel_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_SingleDoubleLayer_DimyMax"].ToString() %>';
                //var PCB_DPanel_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimxMin"].ToString() %>';
                //var PCB_DPanel_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimxMax"].ToString() %>';
                //var PCB_DPanel_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimyMin"].ToString() %>';
                //var PCB_DPanel_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Dpanel_MultiLayer_DimyMax"].ToString() %>';

                //var PCB_Panel_Dimension_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimxMin"].ToString() %>';
                //var PCB_Panel_Dimension_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimxMax"].ToString() %>';
                //var PCB_Panel_Dimension_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimyMin"].ToString() %>';
                //var PCB_Panel_Dimension_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_SingleDoubleLayer_DimyMax"].ToString() %>';
                //var PCB_Panel_Dimension_Multilayer_DimxMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimxMin"].ToString() %>';
                //var PCB_Panel_Dimension_Multilayer_DimxMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimxMax"].ToString() %>';
                //var PCB_Panel_Dimension_Multilayer_DimyMin = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimyMin"].ToString() %>';
                //var PCB_Panel_Dimension_Multilayer_DimyMax = '<%= System.Configuration.ConfigurationManager.AppSettings["PCB_Panel_MultiLayer_DimyMax"].ToString() %>';

                var PCB_Dimension_DimxMin = '20';
                var PCB_Dimension_DimxMax = '430';
                var PCB_Dimension_DimyMin = '20';
                var PCB_Dimension_DimyMax = '585';
                var PCB_Dimension_Multilayer_DimxMin = '20';
                var PCB_Dimension_Multilayer_DimxMax = '415';
                var PCB_Dimension_Multilayer_DimyMin = '20';
                var PCB_Dimension_Multilayer_DimyMax = '565';

                var PCB_DPanel_Dimension_DimxMin = '5';
                var PCB_DPanel_Dimension_DimxMax = '430';
                var PCB_DPanel_Dimension_DimyMin = '5';
                var PCB_DPanel_Dimension_DimyMax = '585';
                var PCB_DPanel_Dimension_Multilayer_DimxMin = '5';
                var PCB_DPanel_Dimension_Multilayer_DimxMax = '415';
                var PCB_DPanel_Dimension_Multilayer_DimyMin = '5';
                var PCB_DPanel_Dimension_Multilayer_DimyMax = '565';

                var PCB_Panel_Dimension_DimxMin = '50';
                var PCB_Panel_Dimension_DimxMax = '430';
                var PCB_Panel_Dimension_DimyMin = '50';
                var PCB_Panel_Dimension_DimyMax = '585';
                var PCB_Panel_Dimension_Multilayer_DimxMin = '50';
                var PCB_Panel_Dimension_Multilayer_DimxMax = '415';
                var PCB_Panel_Dimension_Multilayer_DimyMin = '50';
                var PCB_Panel_Dimension_Multilayer_DimyMax = '565';

                var Active = "<%=active%>";
                if (Active == 1031 || Active == 1033) {
                    showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');

                    $(".modal-backdrop").remove();
                    $('#divShowLoadingImage').removeClass('fade in');
                    $('#divShowLoadingImage').hide();
                    $('#divBootstrapPopup').hide();
                    return false;
                }
                var isUserBlocked = false;
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckedUserBlocked',
                    //data: JSON.stringify(),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {

                        if (msg.d == "1") {
                            isUserBlocked = true;
                            showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                            CloseLoading();
                            return false;
                        }
                    }
                });
                if (isUserBlocked) {
                    return false;
                }
                var QuantityNew = $("#ctl00_ContentPlaceHolder1_txtQuantityNew").val();
                if (QuantityNew == '' || QuantityNew == '0') {
                    showwarning('Please enter quantity.');
                    return false;
                }
                var restricedWorkingDaysValue = $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val();

                //17 July 2018
                if (PLACEORDER.RestrictMultiLayersFor3And5Wdays != "") {
                    if (restricedWorkingDaysValue == "5#334" || restricedWorkingDaysValue == "7#529") {
                        var value_layers = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                        if (value_layers != "2180" && value_layers != "2181") {
                            showwarning('' + PLACEORDER.RestrictMultiLayersFor3And5Wdays + '');
                            return false;
                        }
                    }
                }
                //17 July 2018

                //6 June 2018
                if (PLACEORDER.RestrictSqMtrText_g1 != "") {
                    if (restricedWorkingDaysValue != "15#1453" && restricedWorkingDaysValue != "25#7272") {
                        var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                        if (hdnSqMtr == "false") {
                            showwarning('' + PLACEORDER.RestrictSqMtrText_g1 + '');
                            return false;
                        }
                    }
                }
                else {
                    if (PLACEORDER.RestrictSqMtrText_g2 != "") {
                        var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                        if (restricedWorkingDaysValue != "25#7272") {
                            if (hdnSqMtr == "false") {
                                showwarning('' + PLACEORDER.RestrictSqMtrText_g2 + '');
                                return false;
                            }
                        }
                    }
                }
                //6 June 2018

                if (PLACEORDER.RestrictSqMtrText != "") {
                    if (restricedWorkingDaysValue != "25#7272") {
                        var hdnSqMtr = $('#ctl00_ContentPlaceHolder1_hdnSqMtr').val();
                        if (hdnSqMtr == "false") {
                            showwarning('' + PLACEORDER.RestrictSqMtrText + '');
                            return false;
                        }
                    }
                }

                if (PLACEORDER.restrictedWorkingDaysMsg != '') {
                    if (restricedWorkingDaysValue == '3#333') {
                        showwarning('' + PLACEORDER.restrictedWorkingDaysMsg + '');
                        return false;
                    }
                }

                var layerForRestrictML4 = $('#ctl00_ContentPlaceHolder1_ddlLayers').val();
                if (layerForRestrictML4 == '2183') {
                    if (PLACEORDER.restrictedWdaysMsgForML4 != '') {
                        if (restricedWorkingDaysValue == '5#334') {
                            showwarning('' + PLACEORDER.restrictedWdaysMsgForML4 + '');
                            CloseLoading();
                            return false;
                        }
                    }
                }

                var pcbName = $('.clsPCBName').val().trim();
                if (pcbName == '') {
                    showwarning('Please Enter PCB Name.');
                    PLACEORDER.CheckPCBNameBorderColor();
                    CloseLoading();
                    return false;
                }

                var isInqPCBNameExist = false;
                var parameter = { "pcbName": pcbName, "type": 'inqpcb' };
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckPCBName',
                    data: JSON.stringify(parameter),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.d > 0) {
                            isInqPCBNameExist = true;
                            $('.clsPCBName').focus();
                            showwarning('PCB name already exist in system. Please place inquiry with different pcb name.');
                            CloseLoading();
                            return false;
                        }
                    }
                });
                if (isInqPCBNameExist) {
                    return false;
                }
                var isPCBNameExist = false;
                parameter = { "pcbName": pcbName, "type": 'pcb' };
                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/CheckPCBName',
                    data: JSON.stringify(parameter),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        if (msg.d > 0) {
                            isPCBNameExist = true;
                            showwarning('PCB name already exist in system. Please place inquiry with different pcb name.');
                            CloseLoading();
                            return false;
                        }
                    }
                });
                if (isPCBNameExist) {
                    return false;
                }
                var PcbQty = $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val();
                var AssemblyQty = $('#ctl00_ContentPlaceHolder1_TxtAssemblyQty').val();
                var isAsseChecked = $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').prop('checked');
                if (isAsseChecked == true) {
                    if (PcbQty < AssemblyQty) {
                        showwarning('Please enter assembly quantity equal to pcb quantity or less.');
                        return false;
                    }
                }

                var file = $('#ctl00_ContentPlaceHolder1_fpOrderFile')[0].files;
                var len = $('#ctl00_ContentPlaceHolder1_fpOrderFile').get(0).files.length;
                if (len == 0) {
                    //showwarning('Please attach gerber file');
                    //return false;
                }
                else {
                    var ext = file[0].name.split('.').pop().toLowerCase();
                    if ($.inArray(ext, ['zip', 'rar']) == -1) {
                        showwarning('Please attach .ZIP or .RAR file');
                        return false;
                    }
                }

                var layer = document.getElementById("ctl00_ContentPlaceHolder1_ddlLayers");
                var checkLayer = layer.options[layer.selectedIndex].value;
                var material = $('#ctl00_ContentPlaceHolder1_DDlMaterial').val();
                if (material == "FR4") {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_Dimension_DimxMin + ' to ' + PCB_Dimension_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_Multilayer_DimyMin + ' to ' + PCB_Dimension_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_Multilayer_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_Dimension_Multilayer_DimxMin + ' to ' + PCB_Dimension_Multilayer_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_Multilayer_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_DimyMin + ' to ' + PCB_Dimension_Multilayer_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                }
                else {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_Dimension_DimxMin + ' to ' + PCB_Dimension_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_Multilayer_DimyMin + ' to ' + PCB_Dimension_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBsingleboardNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Dimension_Multilayer_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_Dimension_Multilayer_DimxMin + ' to ' + PCB_Dimension_Multilayer_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Dimension_Multilayer_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_Dimension_DimyMin + ' to ' + PCB_Dimension_Multilayer_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                }

                if (material == "FR4") {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_DimxMin + ' to ' + PCB_DPanel_Dimension_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_DimyMin + ' to ' + PCB_DPanel_Dimension_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_Multilayer_DimxMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_Multilayer_DimyMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                }
                else {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_DimxMin + ' to ' + PCB_DPanel_Dimension_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_DimyMin + ' to ' + PCB_DPanel_Dimension_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtDimXNew').val();
                            if (parseFloat(PCBDimensionX) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimxMax)) {
                                showwarning('Enter PCB dimension X value between ' + PCB_DPanel_Dimension_Multilayer_DimxMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimxMax + ' mm.');
                                return false;
                            }
                            var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtDimYNew').val();
                            if (parseFloat(PCBDimensionY) < parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_DPanel_Dimension_Multilayer_DimyMax)) {
                                showwarning('Enter PCB dimension Y value between ' + PCB_DPanel_Dimension_Multilayer_DimyMin + ' to ' + PCB_DPanel_Dimension_Multilayer_DimyMax + ' mm.');
                                return false;
                            }
                        }
                    }
                }
                if (material == "FR4") {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                }
                else {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                }

                if (material == "FR4") {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNewCust').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                }
                else {
                    if (checkLayer == "2180" || checkLayer == "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNewCust').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                    if (checkLayer != "2180" && checkLayer != "2181") {
                        if ($('#ctl00_ContentPlaceHolder1_RRBPanelNew').is(":checked")) {
                            if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                                var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                                if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_Multilayer_DimxMin) || parseFloat(PCBDimensionX) > parseFloat(PCB_Panel_Dimension_Multilayer_DimxMax)) {
                                    showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_Multilayer_DimxMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimxMax + ' mm.');
                                    return false;
                                }
                                var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                                if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_Multilayer_DimyMin) || parseFloat(PCBDimensionY) > parseFloat(PCB_Panel_Dimension_Multilayer_DimyMax)) {
                                    showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_Multilayer_DimyMin + ' to ' + PCB_Panel_Dimension_Multilayer_DimyMax + ' mm.');
                                    return false;
                                }
                            }
                        }
                    }
                }

                if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {
                    var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile')[0].files;
                    var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyBOMfile').get(0).files.length;
                    if (len == 0) {
                        showwarning('Please attach BOM file');
                        return false;

                    }
                    else {
                        var ext = file[0].name.split('.').pop().toLowerCase();
                        if ($.inArray(ext, ['xlsx', 'xls', 'csv']) == -1) {
                            showwarning('Please attach .XLSX or .XLS or .CSV file');
                            return false;
                        }
                    }
                    var file = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile')[0].files;
                    var len = $('#ctl00_ContentPlaceHolder1_fpAssemblyTxtFile').get(0).files.length;
                    if (len == 0) {
                        //showwarning('Please attach pick and place file');
                        //return false;
                    }
                    else {
                        var ext = file[0].name.split('.').pop().toLowerCase();
                        if ($.inArray(ext, ['txt', 'xls', 'csv', 'xlsx',]) == -1) {
                            showwarning('Please attach .txt or xls or xlsx or csv file');
                            return false;
                        }
                    }
                    //if ($("#ctl00_ContentPlaceHolder1_RRBpcbpowerNew").is(":checked")) {
                    //    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimX').val();
                    //    if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) >= parseFloat(PCB_Panel_Dimension_DimxMax)) {
                    //        showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                    //        return false;
                    //    }
                    //    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimY').val();
                    //    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) >= parseFloat(PCB_Panel_Dimension_DimyMax)) {
                    //        showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                    //        return false;
                    //    }
                    //}
                    //else if ($("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked")) {
                    //    var PCBDimensionX = $('#ctl00_ContentPlaceHolder1_txtpaneldimXNewCust').val();
                    //    if (parseFloat(PCBDimensionX) < parseFloat(PCB_Panel_Dimension_DimxMin) || parseFloat(PCBDimensionX) >= parseFloat(PCB_Panel_Dimension_DimxMax)) {
                    //        showwarning('Enter Panel dimension X value between ' + PCB_Panel_Dimension_DimxMin + ' to ' + PCB_Panel_Dimension_DimxMax + ' mm.');
                    //        return false;
                    //    }
                    //    var PCBDimensionY = $('#ctl00_ContentPlaceHolder1_txtpaneldimYNewCust').val();
                    //    if (parseFloat(PCBDimensionY) < parseFloat(PCB_Panel_Dimension_DimyMin) || parseFloat(PCBDimensionY) >= parseFloat(PCB_Panel_Dimension_DimyMax)) {
                    //        showwarning('Enter Panel dimension Y value between ' + PCB_Panel_Dimension_DimyMin + ' to ' + PCB_Panel_Dimension_DimyMax + ' mm.');
                    //        return false;
                    //    }
                    //}

                    var txtSMD = $('#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents').val();
                    var txtBga = $('#ctl00_ContentPlaceHolder1_TxtAssemblyBgaTqfpComponents').val();
                    var ddlAssStencilSide = $("#ctl00_ContentPlaceHolder1_ddlAssemblyStencilSide");
                    var AssemblySelText = ddlAssStencilSide.find("option:selected").text();

                    if ((txtSMD > 0 || txtBga > 0) && AssemblySelText == "None") {

                        showwarning('Please select stencil side first.');
                        return false;
                    }
                    else if (txtSMD <= 0 && txtBga <= 0 && AssemblySelText != "None") {
                        showwarning('Please select stencil side as None.');
                        return false;
                    }


                }
                $('#ctl00_ContentPlaceHolder1_Chkremarks').trigger('click');
                $('#PagePreload').hide();
            });

            //$('#spnMatrixMaterial').text('FR4');
            //$('#spnMatrixTG').text('Middle Tg ( 150 °)');
            //$('#spnMatrixLayer').text('Single Sided');
            //$('#spnMatrixDeliveryDays').text('3 Working Days');
            //$('#spnMatrixPCBQty').text('1');
            //$('#spnMatrixPCBThickness').text('1.6 mm');
            //$('#spnMatrixSurfaceFinish').text('HAL (Sn-Pb)');
            //$('#spnMatrixViaFill').text('No');
            //$('#spnMatrixImpedancecontrol').text('No');
            //$('#spnMatrixBlindburiedvia').text('No');
            //$('#spnMatrixPeelOff').text('No');
            //$('#spnMatrixCountersunk').text('No');
            //$('#spnMatrixPlatedholesontheboardedge').text('No');

            $('#ctl00_ContentPlaceHolder1_txtQuantityNew').live('change', function () {
                $('#spnMatrixPCBQty').text($(this).val());
            });
            $('#ctl00_ContentPlaceHolder1_TxtAssemblyQty').live('change', function () {

                var Assemblyqty = $("#ctl00_ContentPlaceHolder1_TxtAssemblyQty").val().trim();
                if (Assemblyqty == 0) {
                    $('#ctl00_ContentPlaceHolder1_TxtAssemblyQty').val(1);
                }
            });
            $('#ctl00_ContentPlaceHolder1_TxtAssembleComponent').live('change', function () {

                var AssemblyComponent = $("#ctl00_ContentPlaceHolder1_TxtAssembleComponent").val().trim();
                if (AssemblyComponent == 0) {
                    $('#ctl00_ContentPlaceHolder1_TxtAssembleComponent').val(1);
                }
            });
            $('#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents').live('change', function () {

                var AssemblySMDComponents = $("#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents").val().trim();
                if (AssemblySMDComponents == 0) {
                    $('#ctl00_ContentPlaceHolder1_TxtAssemblySMDComponents').val(0);
                }
            });
            $('#ctl00_ContentPlaceHolder1_AssemblyHoleComponents').live('change', function () {

                var AssemblyHoleComponents = $("#ctl00_ContentPlaceHolder1_AssemblyHoleComponents").val().trim();
                if (AssemblyHoleComponents == 0) {
                    $('#ctl00_ContentPlaceHolder1_AssemblyHoleComponents').val(0);
                }
            });

            $('.layers').live('click', function () {

                
                var selectedLayerText = $(this).attr('data-val');
                if (selectedLayerText != "2180" && selectedLayerText != "2181") {
                    $('.InnercopperthicknessNew[data-val="0"]').hide();
                    PLACEORDER.setInnercopperthickness('0.00');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0.00');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0.00'); //$('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('35.00').change();
                    $('.StartCopperThicknessNew[data-val="90.00"]').show();
                }
                else {
                    
                    $('.InnercopperthicknessNew[data-val="0"]').show();
                    PLACEORDER.setInnercopperthickness('17.50');//setInnercopperthickness('0');
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');//$('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val('0');
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0');//$('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val('0').change();
                    $('.StartCopperThicknessNew[data-val="90.00"]').hide();
                    //when multi layer selected and than user select single or double side layer
                    PLACEORDER.setBoardThickness('1.6');
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                }
                //setDefaultValuesByLayer(selectedLayerText);
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.layers').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_layer').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnLayer').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlLayers').val($(this).attr('data-val')).change();
                    //$('#ctl00_ContentPlaceHolder1_ddlLayers').val($(this).attr('data-val')).trigger('click'); //$('#ctl00_ContentPlaceHolder1_ddlLayers').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
                PLACEORDER.setDefaultValuesByLayer(selectedLayerText);
            });
            $('.clsmore').live('click', function () {
                var removeclass = $(this).attr('removeclass');
                var addclass = $(this).attr('addclass');
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.' + removeclass + '').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.' + addclass + '').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.BoardSeparation').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                var boardSeparationText = $(this).text();

                if (boardSeparationText == "Breakrouting") {
                    $('.DistancebwPCBsNew[data-val="0"]').hide();
                }
                else if (boardSeparationText == "V-Cut") {
                    $('.DistancebwPCBsNew[data-val="2"]').hide();
                }

                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.BoardSeparation').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_bs').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnBoardSeparation').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLboardSep').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.DistancebwPCBsNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DistancebwPCBsNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnDistancebwPCBs').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLDistBetPCB').val($(this).attr('data-val')).change();
                }
            });

            $('.icondiffdesignppanel').live('click', function () {
                if ($('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').is(":checked")) {

                }
                else {
                    var isPanel = $("#ctl00_ContentPlaceHolder1_RRBPanelNew").is(":checked");
                    var isCustomer = $("#ctl00_ContentPlaceHolder1_RRBCustomerNew").is(":checked");
                    if (isPanel && isCustomer) {
                        var value = parseInt($('.DifferentDesignsperpanel').text());
                        if ($(this).hasClass('increasedifdeppanel')) {
                            if (value != 20) {
                                PLACEORDER.showPriceLoading();
                                value = value + 1;
                                $('#ctl00_ContentPlaceHolder1_hdnDifferentDesignPerPanel').val(value);
                                $('.DifferentDesignsperpanel').text(value);
                                $('#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel').val(value).change();
                            }
                        }
                        else if ($(this).hasClass('decreasedifdeppanel')) {
                            if (value != 1) {
                                PLACEORDER.showPriceLoading();
                                value = value - 1;
                                $('#ctl00_ContentPlaceHolder1_hdnDifferentDesignPerPanel').val(value);
                                $('.DifferentDesignsperpanel').text(value);
                                $('#ctl00_ContentPlaceHolder1_DDLDiffDesignPerPanel').val(value).change();
                            }
                        }
                    }
                }
            });
            $('.iconhardgold').live('click', function () {
                var value = parseInt($('.HardGoldNew').text());
                if ($(this).hasClass('increasehardgold')) {
                    PLACEORDER.showPriceLoading();
                    value = value + 1;
                    $('.HardGoldNew').text(value);
                    $('.HardGoldNew').attr('data-val', value);
                    $('#ctl00_ContentPlaceHolder1_txtedgeConnectop').val(value).change();
                    $('#ctl00_ContentPlaceHolder1_hdnEdgeConnecTopDepndsonHardGold').val(value);
                }
                else if ($(this).hasClass('decreasehardgold')) {
                    if (value != 0) {
                        PLACEORDER.showPriceLoading();
                        value = value - 1;
                        $('.HardGoldNew').text(value);
                        $('.HardGoldNew').attr('data-val', value);
                        $('#ctl00_ContentPlaceHolder1_txtedgeConnectop').val(value).change();
                        $('#ctl00_ContentPlaceHolder1_hdnEdgeConnecTopDepndsonHardGold').val(value);
                    }
                }
                $('#ctl00_ContentPlaceHolder1_DDLHardGold').val('NA');
                if (value > 0) {
                    $('#ctl00_ContentPlaceHolder1_DDLHardGold').val('YES');
                }
            });
            $('.PanelBorderNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.PanelBorderNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnPanelBorder').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLPanelBorder').val($(this).attr('data-val')).change();
                }
            });
            $('.TGNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.TGNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_tg').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnTG').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLTG').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });

            $('.MaterialNew').live('click', function () {
                var selectedLayerText = $(this).text();
                PLACEORDER.showhideTG(1);//$('.clsTGNew').show();
                if (selectedLayerText != "FR4") {
                    PLACEORDER.showhideTG(0);//$('.clsTGNew').hide();
                }
                //if (selectedLayerText == "MCPCB")
                //{
                //    $('#ctl00_ContentPlaceHolder1_RRBAssemblyYes').attr('disabled', 'true');
                //}
                if (selectedLayerText == "FR4" || selectedLayerText == "MCPCB") {
                    PLACEORDER.setBoardThickness('1.6');
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6').change();
                }
                else if (selectedLayerText == "RO4350B" || selectedLayerText == "RT5880" || selectedLayerText == "RO6002" || selectedLayerText == "ITERA-MT-3.38" || selectedLayerText == "ITERA-MT-3.5") {
                    PLACEORDER.setLayer('2180');
                    $('#ctl00_ContentPlaceHolder1_hdnLayer').val('2180');
                    $('#ctl00_ContentPlaceHolder1_ddlLayers').val('2180');

                    PLACEORDER.setBoardThickness('0.5');
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.5');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.5').change();
                }
                else if (selectedLayerText == "RT3003" || selectedLayerText == "RO4534" || selectedLayerText == "RO4003C") {
                    PLACEORDER.setLayer('2180');
                    $('#ctl00_ContentPlaceHolder1_hdnLayer').val('2180');
                    $('#ctl00_ContentPlaceHolder1_ddlLayers').val('2180');

                    PLACEORDER.setBoardThickness('0.8');
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('0.8');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8'); //$('#ctl00_ContentPlaceHolder1_DDLboardThick').val('0.8').change();
                    var ismore = $('.clsmoreboardthickness').attr('ismore');
                    if (ismore != '1') {
                        $('.clsmoreboardthickness').click();
                    }
                }

                if (selectedLayerText == "MCPCB") {
                    PLACEORDER.setLayer('2180');
                    $('#ctl00_ContentPlaceHolder1_hdnLayer').val('2180');
                    $('#ctl00_ContentPlaceHolder1_ddlLayers').val('2180'); //$('#ctl00_ContentPlaceHolder1_ddlLayers').val('2180').change();

                    PLACEORDER.setSolderMaskColorTop('bk');
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorTop').val('bk');
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('bk'); //$('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('bk').change();
                    PLACEORDER.setSolderMaskColorBottom('bk');
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorBottom').val('bk');
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('bk'); //$('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('bk').change();
                }
                else {
                    PLACEORDER.setSolderMaskColorTop('gr');
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorTop').val('gr');
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('gr'); //$('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val('gr').change();
                    PLACEORDER.setSolderMaskColorBottom('gr');
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorBottom').val('gr');
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('gr'); //$('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val('gr').change();
                }

                if (selectedLayerText == "MCPCB") {
                    PLACEORDER.setSurfaceFinishForMCPCB();
                    PLACEORDER.showSolderMaskWhiteForMCPCB();
                    PLACEORDER.showLegendBlackForMCPCB();
                }
                else {
                    PLACEORDER.showSolderMaskGreenForAllMaterialthanMCPCB();
                    PLACEORDER.showLegendWhiteForAllMaterialthanMCPCB();
                    PLACEORDER.setSurfaceFinishOtherThanMCPCB();
                }

                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.MaterialNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_material').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnMaterial').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDlMaterial').val($(this).attr('data-val')).change();
                }
                var selectedLayerText = $('.layers[class*="selecter-on"]').attr('data-val');
                PLACEORDER.setDefaultValuesByLayer(selectedLayerText);
                PLACEORDER.showPriceLoading();
            });
            $('.BoardThicknessNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.BoardThicknessNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_BoardThick').addClass('fa-circle-o').removeClass('fa-check-circle');

                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.clsmoreboardthickness').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.BoardThicknessNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessboardthickness').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.StartCopperThicknessNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.StartCopperThicknessNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_CUthickness').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnStartCopperThickness').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLStartcopperThickness').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.OuterfinishcuthicknessNew').live('click', function () {
                
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.OuterfinishcuthicknessNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_OuterCUthickness').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnOuterCopperThickness').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLOuterCopperThickness').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.clsmorestartcopperthickness').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.StartCopperThicknessNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessstartcopperthickness').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.DeliveryDaysNew').live('click', function () {
                
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DeliveryDaysNew ').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_pcbworkdays').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.DeliveryDaysNew1').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DeliveryDaysNew1').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_awd').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $(this).children('.fa_awd').removeClass('fa-circle-o').addClass('fa-check-circle');
                    $('#ctl00_ContentPlaceHolder1_ddlAssemblyDelTerms').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });



            $('.DeliveryDaysNewCom').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DeliveryDaysNewCom').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_awd').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $(this).children('.fa_awd').removeClass('fa-circle-o').addClass('fa-check-circle');
                    $('#ctl00_ContentPlaceHolder1_ddlComponentDelTerms').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.clsmoredeliverydays').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.DeliveryDaysNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessdeliverydays').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.DeliveryAddressNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DeliveryAddressNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryAdd').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlDelAddr').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.InvoiceAddressNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.InvoiceAddressNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnInvoiceAdd').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlInvAddr').val($(this).attr('data-val')).change();
                }
            });
            $('.clsmoredeliveryaddress').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.DeliveryAddressNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessdeliveryaddress').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.clsmoreinvoiceaddress').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.InvoiceAddressNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessinvoiceaddress').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.clsmoreouterfinishcuthickness').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.OuterfinishcuthicknessNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessouterfinishcuthickness').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.BoardSeparation').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.BoardSeparation ').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                }
            });
            $('.InnercopperthicknessNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.InnercopperthicknessNew ').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnInnercopperthickness').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLInnerCopperthickness').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.clsinnercopperthickness').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.InnercopperthicknessNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelessinnercopperthickness').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.SolderMaskColorTopNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.SolderMaskColorTopNew ').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorTop').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorTop').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.clsmoresoldermasktop').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.SolderMaskColorTopNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelesssoldermasktop').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.SolderMaskColorBottomNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.SolderMaskColorBottomNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnSolderMaskColorBottom').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLSolderMaskColorBottom').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.clsmoresoldermaskbottom').live('click', function () {
                var txt = $(this).text();
                if (txt == 'Show More') {
                    $('.SolderMaskColorBottomNew').removeClass('hide');
                    $(this).attr('ismore', '1');
                    $(this).text('Show Less');
                }
                else {
                    $('.clsmorelesssoldermaskbottom').addClass('hide');
                    $(this).attr('ismore', '0');
                    $(this).text('Show More');
                }
            });
            $('.LegendTopNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.LegendTopNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnLegendTop').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLLegendTop').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.LegendbottomNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.LegendbottomNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnLegendbottom').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLLegendBottom').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.surfacefinishNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.surfacefinishNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_sf').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnSurfaceFinish').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLsurfacefinish').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });
            $('.BlindburiedviaNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.BlindburiedviaNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#spnMatrixBlindburiedvia').text($(this).text());
                    $('#ctl00_ContentPlaceHolder1_hdnBlindBuriedVia').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLBlindBuriedVia').val($(this).attr('data-val')).change();

                    //var layer_val = $('#ctl00_ContentPlaceHolder1_hdnLayer').val();
                    //if (layer_val == '2185' || layer_val == '2198') {
                    //    setDefaultValuesByLayer(layer_val);
                    //}
                    //else {
                    //    setWorkingDaysPerIncremantal1();
                    //}
                    PLACEORDER.setWorkingDaysPerIncremantal1();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.ImpedancecontrolNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.ImpedancecontrolNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#spnMatrixImpedancecontrol').text($(this).text());
                    $('#ctl00_ContentPlaceHolder1_hdnImpedancecontrol').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLImpedanceControl').val($(this).attr('data-val')).change();

                    //var layer_val = $('#ctl00_ContentPlaceHolder1_hdnLayer').val();
                    //if (layer_val == '2185' || layer_val == '2198') {
                    //    PLACEORDER.setDefaultValuesByLayer(layer_val);
                    //}
                    //else {
                    //    PLACEORDER.setWorkingDaysPerIncremantal1();
                    //}
                    PLACEORDER.setWorkingDaysPerIncremantal1();

                    PLACEORDER.showPriceLoading();
                }
            });
            $('.SpecilaBuildupNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.SpecilaBuildupNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");

                    //var layer_val = $('#ctl00_ContentPlaceHolder1_hdnLayer').val();
                    //if (layer_val == '2185' || layer_val == '2198') {
                    //    PLACEORDER.setDefaultValuesByLayer(layer_val);
                    //}
                    //else {
                    //    PLACEORDER.setWorkingDaysPerIncremantal1();
                    //} 
                    PLACEORDER.setWorkingDaysPerIncremantal1();
                    $('#ctl00_ContentPlaceHolder1_hdnSpecilaBuildup').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_CHKSpecilaBuildup').trigger('click');
                }
                PLACEORDER.showPriceLoading();
            });
            $('.ViafillNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.ViafillNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnViaFill').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_CHKViaFill').trigger('click');
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.PeelOffNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.PeelOffNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#spnMatrixPeelOff').text($(this).text());
                    $('#ctl00_ContentPlaceHolder1_hdnPeelOff').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDLPeelOff').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });

            $('.CarboncontactsNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.CarboncontactsNew').each(function () {
                        $(this).removeClass("selecter-on");
                        $(this).children('.fa_cc').addClass('fa-circle-o').removeClass('fa-check-circle');
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnCarboncontacts').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_DDlCarboncontacts').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                    if ($(this).attr('data-val') != '0') {
                        $('#ctl00_ContentPlaceHolder1_DDLCarbon').val('YES');
                    }
                    else {
                        $('#ctl00_ContentPlaceHolder1_DDLCarbon').val('NA');
                    }
                }
            });
            $('.BevellingNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.BevellingNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnBevelling').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ChkBevelling').trigger('click');
                }
                PLACEORDER.showPriceLoading();
            });

            $('.SerializationforPCBsNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.SerializationforPCBsNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnSealizeforPCBs').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlserializationforPCBs').val($(this).attr('data-val')).change();
                }
                PLACEORDER.showPriceLoading();
            });

            $('.CountersunkNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.CountersunkNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#spnMatrixCountersunk').text($(this).text());
                    $('#ctl00_ContentPlaceHolder1_hdnCountersunk').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlcountersunk1').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.PlatedholesontheboardedgeNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.PlatedholesontheboardedgeNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#spnMatrixPlatedholesontheboardedge').text($(this).text());
                    $('#ctl00_ContentPlaceHolder1_hdnPlatedholesontheboardedge').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_chkPlatedEdge').trigger('click');
                    PLACEORDER.showPriceLoading();
                }
            });
            $('.CopperuntiltheedgeoftheboardNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.CopperuntiltheedgeoftheboardNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnCopperuntiltheedgeoftheboard').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlIsCopperEdge').val($(this).attr('data-val')).change();
                }
            });
            $('.RoundEdgePlattingNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.RoundEdgePlattingNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnRoundEdgePlatting').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlRoundEdgePlatting').val($(this).attr('data-val')).change();
                    PLACEORDER.showPriceLoading();
                }
            });

            $('.ULsignNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.ULsignNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnULSign').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_CHKULSign').trigger('click');
                }
            });
            $('.Asse_comp_type').live('click', function () {

                var isSelectedClass = $(this).hasClass("selecter-on");

                if (isSelectedClass) {
                    return;

                }
                else {

                    $('.Asse_comp_type').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_ddl_Inq_component_type').val($(this).attr('data-val')).change();


                    var AssemComtype = ($(this).attr('data-val'));
                    if (AssemComtype == 2) {
                        $('#ComponentDays').hide();
                    }
                    else {
                        $('#ComponentDays').show();

                    }
                }
            });

            $('.Inq_comp_Days').live('click', function () {

                var isSelectedClass = $(this).hasClass("selecter-on");

                if (isSelectedClass) {
                    return;

                }
                else {

                    $('.Inq_comp_Days').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_ddl_inq_component_days').val($(this).attr('data-val')).change();
                }
            });


            $('.ManufacturinglogoNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.ManufacturinglogoNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnMGFLOGO').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_chkMGFLOGO').trigger('click');
                }
            });
            $('.DatecodeNew').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.DatecodeNew').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnDatecode').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddldateCode').val($(this).attr('data-val')).change();
                }
            });
            $('.PrintEtok').live('click', function () {
                var isSelectedClass = $(this).hasClass("selecter-on");
                if (isSelectedClass) {
                    return;
                }
                else {
                    $('.PrintEtok').each(function () {
                        $(this).removeClass("selecter-on");
                    });
                    $(this).addClass("selecter-on");
                    $('#ctl00_ContentPlaceHolder1_hdnPrintEtok').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddlPrintEtok').val($(this).attr('data-val')).change();
                }
            });
            $('.Assemby_comp_type1').live('click', function () {

                var isSelectedClass = $(this).hasClass("selecter-on");

                if (isSelectedClass) {
                    return;

                }
                else {

                    $('#ctl00_ContentPlaceHolder1_hdnComponentSourcing').val($(this).attr('data-val'));
                    $('#ctl00_ContentPlaceHolder1_ddl_comp_type').val($(this).attr('data-val')).change();


                    var Componenttype = ($(this).attr('data-val'));
                    if (Componenttype == 2) {
                        $("#ctl00_ContentPlaceHolder1_DivComponentDays").hide();
                    }
                    else {
                        $("#ctl00_ContentPlaceHolder1_DivComponentDays").show();
                    }
                }
            });

            $('.AssemblystencilSide').live('click', function () {

                var isSelectedClass = $(this).hasClass("selecter-on");
                var dataValue = $(this).attr("data-val");
                if (isSelectedClass) {

                    return;
                }
                else {
                    $('#ctl00_ContentPlaceHolder1_hdnAssemblyStencilSide').val($(this).attr('data-val'));

                    $('#ctl00_ContentPlaceHolder1_ddlAssemblyStencilSide').val($(this).attr('data-val')).change()

                    //$(this).removeClass("selecter-on");
                    $('.AssemblystencilSide').each(function () {
                        $(this).children('.fa_asmblyStencilSide').addClass('fa-circle-o').removeClass('fa-check-circle');
                        //if (dataValue == $(this).attr("data-val")) {
                        //    $(this).addClass("selecter-on");
                        //}
                    });
                    // $(this).addClass("selecter-on");
                    ;
                }
            });

            $('.AssemblystencilType').live('click', function () {

                var isSelectedClass = $(this).hasClass("selecter-on");
                var dataValue = $(this).attr("data-val");
                if (isSelectedClass) {

                    return;
                }
                else {
                    $('#ctl00_ContentPlaceHolder1_hdnAssemblySide').val($(this).attr('data-val'));

                    $('#ctl00_ContentPlaceHolder1_DDLAssemblyStencil').val($(this).attr('data-val')).change()

                    //$(this).removeClass("selecter-on");
                    $('.AssemblystencilType').each(function () {
                        $(this).children('.fa_asmblySide').addClass('fa-circle-o').removeClass('fa-check-circle');
                        //if (dataValue == $(this).attr("data-val")) {
                        //    $(this).addClass("selecter-on");
                        //}
                    });
                    // $(this).addClass("selecter-on");
                    ;
                }
            });
            // $('#ctl00_ContentPlaceHolder1_RRbAssembly_0').prop('checked', function (e) {

            //   $('.assemblysection_inquiry').hide();
            //   var isChecked = $(this).prop('checked');
            //   if (isChecked == true) {
            //       $('.assemblysection_inquiry').show();
            //   }
            //});
            $('#ctl00_ContentPlaceHolder1_RRbAssemblyinqYes').live('click', function (e) {

                $('.assemblysection_inquiry').hide();
                var isChecked = $(this).prop('checked');
                if (isChecked == true) {
                    $('.assemblysection_inquiry').show();
                }
                //$("#ctl00_ContentPlaceHolder1_RRbAssemblyinqSingle").attr('disabled', true);


            });

            $('#ctl00_ContentPlaceHolder1_RRbAssemblyinqYes').prop('checked', function (e) {

                $('.assemblysection_inquiry').hide();
                var isChecked = $(this).prop('checked');
                if (isChecked == true) {
                    $('.assemblysection_inquiry').show();
                }
                //$('#ctl00_ContentPlaceHolder1_RRBinqSingle').attr('disabled', true);


            });
            var dispatchValue = $('#ctl00_ContentPlaceHolder1_hdnDispatchUnit').val();
            if (dispatchValue == 0) {
                $('#ctl00_ContentPlaceHolder1_RRbAssemblyinqNo').prop('checked', function (e) {

                    //$('#ctl00_ContentPlaceHolder1_RRBinqSingle').attr('disabled', false);
                    $('#ctl00_ContentPlaceHolder1_RRBinqSingle').attr('checked', true);
                });
            }
            $('#ctl00_ContentPlaceHolder1_RRbAssemblyinqNo').live('click', function (e) {

                $('.assemblysection_inquiry').show();
                var isChecked = $(this).prop('checked');
                if (isChecked == true) {
                    $('.assemblysection_inquiry').hide();
                }

                //$('#ctl00_ContentPlaceHolder1_RRBinqSingle').attr('checked', true);
            });

        });

        $(document).ready(function () {
            
            $('.restrictedWDays').live('click', function () {
                if (PLACEORDER.restrictedWorkingDaysMsg != '') {
                    var restricedWorkingDaysValue = $(this).val();
                    if (restricedWorkingDaysValue == '3#333') {
                        $(this).val('5#334');
                        showwarning('' + PLACEORDER.restrictedWorkingDaysMsg + '');
                        return;
                    }
                }
            });

            //Hide Blind & Buried via when page load            
            $('.clsBlindburiedviaNew').hide();


            var layer = document.getElementById("ctl00_ContentPlaceHolder1_ddlLayers");
            var layerVal = layer.options[layer.selectedIndex].value;

            if (layerVal == "2180") {//piyush
                $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="17.50"]').show(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="35.00"]').show(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="60.00"]').hide(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="70.00"]').show(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="90.00"]').hide(); //piyush
                $('.OuterfinishcuthicknessNew[data-val="95.00"]').hide(); //piyush

                $('.InnercopperthicknessNew[data-val="17.50"]').hide();
                $('.InnercopperthicknessNew[data-val="35.00"]').hide();
                $('.InnercopperthicknessNew[data-val="70.00"]').hide();
            }
            //else {
            //    $('.OuterfinishcuthicknessNew[data-val="0.00"]').hide();
            //}

            //Board CU Thickness show from get Quote button and click on price calculator
            if (layerVal == "2180" || layerVal == "2181") {
                $('.clsBlindburiedviaNew').hide();
                $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                $('.BoardThicknessNew[data-val="0.25"]').hide();
                $('.BoardThicknessNew[data-val="0.3"]').show();
                $('.BoardThicknessNew[data-val="0.4"]').show();
                $('.BoardThicknessNew[data-val="0.5"]').show();
                $('.BoardThicknessNew[data-val="0.6"]').show();
                $('.BoardThicknessNew[data-val="0.7"]').show();
                $('.BoardThicknessNew[data-val="0.8"]').show();
                $('.BoardThicknessNew[data-val="1.0"]').show();
                $('.BoardThicknessNew[data-val="1.2"]').show();
                $('.BoardThicknessNew[data-val="1.6"]').show();
                $('.BoardThicknessNew[data-val="2.0"]').show();
                $('.BoardThicknessNew[data-val="2.4"]').show();
                $('.BoardThicknessNew[data-val="3.2"]').show();
            }
            else
            {
                $('.clsBlindburiedviaNew').show();
                if (layerVal == '2183')
                {
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                    $('.BoardThicknessNew[data-val="0.25"]').hide();
                    $('.BoardThicknessNew[data-val="0.3"]').hide();
                    $('.BoardThicknessNew[data-val="0.4"]').hide();
                    $('.BoardThicknessNew[data-val="0.5"]').hide();
                    $('.BoardThicknessNew[data-val="0.6"]').hide();
                    $('.BoardThicknessNew[data-val="0.7"]').hide();
                    $('.BoardThicknessNew[data-val="0.8"]').show();
                    $('.BoardThicknessNew[data-val="1.0"]').show();
                    $('.BoardThicknessNew[data-val="1.2"]').show();
                    $('.BoardThicknessNew[data-val="1.6"]').show();
                    $('.BoardThicknessNew[data-val="2.0"]').show();
                    $('.BoardThicknessNew[data-val="2.4"]').show();
                }
                if (layerVal == '2184') {
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                    $('.BoardThicknessNew[data-val="0.25"]').hide();
                    $('.BoardThicknessNew[data-val="0.3"]').hide();
                    $('.BoardThicknessNew[data-val="0.4"]').hide();
                    $('.BoardThicknessNew[data-val="0.5"]').hide();
                    $('.BoardThicknessNew[data-val="0.6"]').hide();
                    $('.BoardThicknessNew[data-val="0.7"]').hide();
                    $('.BoardThicknessNew[data-val="0.8"]').hide();
                    $('.BoardThicknessNew[data-val="1.0"]').show();
                    $('.BoardThicknessNew[data-val="1.2"]').show();
                    $('.BoardThicknessNew[data-val="1.6"]').show();
                    $('.BoardThicknessNew[data-val="2.0"]').show();
                    $('.BoardThicknessNew[data-val="2.4"]').show();
                }
                if (layerVal == '2185') {
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                    $('.BoardThicknessNew[data-val="0.25"]').hide();
                    $('.BoardThicknessNew[data-val="0.3"]').hide();
                    $('.BoardThicknessNew[data-val="0.4"]').hide();
                    $('.BoardThicknessNew[data-val="0.5"]').hide();
                    $('.BoardThicknessNew[data-val="0.6"]').hide();
                    $('.BoardThicknessNew[data-val="0.7"]').hide();
                    $('.BoardThicknessNew[data-val="0.8"]').hide();
                    $('.BoardThicknessNew[data-val="1.0"]').hide();
                    $('.BoardThicknessNew[data-val="1.2"]').show();
                    $('.BoardThicknessNew[data-val="1.6"]').show();
                    $('.BoardThicknessNew[data-val="2.0"]').show();
                    $('.BoardThicknessNew[data-val="2.4"]').show();
                }
                if (layerVal == '2198') {
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('1.6');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('1.6');
                    $('.BoardThicknessNew[data-val="0.25"]').hide();
                    $('.BoardThicknessNew[data-val="0.3"]').hide();
                    $('.BoardThicknessNew[data-val="0.4"]').hide();
                    $('.BoardThicknessNew[data-val="0.5"]').hide();
                    $('.BoardThicknessNew[data-val="0.6"]').hide();
                    $('.BoardThicknessNew[data-val="0.7"]').hide();
                    $('.BoardThicknessNew[data-val="0.8"]').hide();
                    $('.BoardThicknessNew[data-val="1.0"]').hide();
                    $('.BoardThicknessNew[data-val="1.2"]').hide();
                    $('.BoardThicknessNew[data-val="1.6"]').show();
                    $('.BoardThicknessNew[data-val="2.0"]').show();
                    $('.BoardThicknessNew[data-val="2.4"]').show();
                }
                if (layerVal == '2316') {
                    PLACEORDER.setBoardThickness('2.4');
                    $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val('2.4');
                    $('#ctl00_ContentPlaceHolder1_DDLboardThick').val('2.4');
                    var boardthickness = $('#ctl00_ContentPlaceHolder1_hdnBoardThickness').val();
                    var bThicknessValue = 0;
                    if (boardthickness != '1.6') {
                        bThicknessValue = 1;
                    }
                    PLACEORDER.ChangeBoardThick(bThicknessValue);
                    $('.BoardThicknessNew[data-val="0.25"]').hide();
                    $('.BoardThicknessNew[data-val="0.3"]').hide();
                    $('.BoardThicknessNew[data-val="0.4"]').hide();
                    $('.BoardThicknessNew[data-val="0.5"]').hide();
                    $('.BoardThicknessNew[data-val="0.6"]').hide();
                    $('.BoardThicknessNew[data-val="0.7"]').hide();
                    $('.BoardThicknessNew[data-val="0.8"]').hide();
                    $('.BoardThicknessNew[data-val="1.0"]').hide();
                    $('.BoardThicknessNew[data-val="1.2"]').hide();
                    $('.BoardThicknessNew[data-val="1.6"]').hide();
                    $('.BoardThicknessNew[data-val="2.0"]').hide();
                    $('.BoardThicknessNew[data-val="2.4"]').show();
                }
            }

            var isMatrixScrollable = true;

            $('.clscustomizedmatrix').live('click', function () {
                $('#ctl00_ContentPlaceHolder1_btnComparePriceTemp').click();

                var assemblyvalue = $("#ctl00_ContentPlaceHolder1_RRBAssemblyYes").prop('checked');
                if (assemblyvalue) {
                    $('#divCustomizedPCBAssemblyMatrix').removeClass('fade hide');
                    $('#divCustomizedPCBAssemblyMatrix').addClass('fade in');
                    $('#divCustomizedPCBAssemblyMatrix').show();
                    $('#divBootstrapPopup').show();
                    $(".modal-backdrop").remove();
                    $('<div class="modal-backdrop"></div>').appendTo(document.body);
                }
                else {
                    $('#divCustomizedMatrix').removeClass('fade hide');
                    $('#divCustomizedMatrix').addClass('fade in');
                    $('#divCustomizedMatrix').show();
                    $('#divBootstrapPopup').show();
                    $(".modal-backdrop").remove();
                    $('<div class="modal-backdrop"></div>').appendTo(document.body);
                }
            });

            $('.clsLaunchInquiry').live('click', function () {
                var checkLogin = "0";

                $.ajax({
                    type: 'POST',
                    url: 'place_order.aspx/_CheckUserLogin',
                    //data: JSON.stringify(parameter),
                    async: false,
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (msg) {
                        checkLogin = msg.d;
                    }
                });

                if (checkLogin == "0") {
                    window.location = "../../login.aspx";
                }
                var Active = "<%=active%>";
                if (Active == 1031 || Active == 1033) {
                    showwarning('' + PLACEORDER.MSG_Blocked_Customer + '');
                    return;
                }
                PLACEORDER.LaunchInq();
            });

            $('input[name*="ctl00$ContentPlaceHolder1$chkCustoMatrix"]').live('change', function () {
                $('input[name*="ctl00$ContentPlaceHolder1$chkCustoMatrix"]').not(this).prop('checked', false);
            });

            $('#ctl00_ContentPlaceHolder1_btnBuyNowCustMatrix').live('click', function () {

                var checkedLength = $('input[name*="ctl00$ContentPlaceHolder1$chkCustoMatrix"]:checked').length;
                if (checkedLength == 0) {
                    showwarning('Please select any checkbox.');
                    return;
                }
                $('input[name*="ctl00$ContentPlaceHolder1$chkCustoMatrix"]:checked').each(function () {
                    var deliverydays = $(this).parent().attr('deliverydays');
                    var qty = $(this).parent().attr('qty');
                    PLACEORDER.setDeliveryDays(deliverydays);
                    $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val(deliverydays);
                    $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val(deliverydays).change();
                    $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val(qty);
                    PLACEORDER.DIVCLOSECustomizedMatrix();
                });
            });

            $('#ctl00_ContentPlaceHolder1_btnRecalculateCustMatrix').live('click', function () {
                var txtFirstCustMatrix = $('#ctl00_ContentPlaceHolder1_txtFirstCustMatrix').val() == 0 ? "" : $('#ctl00_ContentPlaceHolder1_txtFirstCustMatrix').val();
                var txtSecondCustMatrix = $('#ctl00_ContentPlaceHolder1_txtSecondCustMatrix').val() == 0 ? "" : $('#ctl00_ContentPlaceHolder1_txtSecondCustMatrix').val();
                var txtThirdCustMatrix = $('#ctl00_ContentPlaceHolder1_txtThirdCustMatrix').val() == 0 ? "" : $('#ctl00_ContentPlaceHolder1_txtThirdCustMatrix').val();
                var txtFourthCustMatrix = $('#ctl00_ContentPlaceHolder1_txtFourthCustMatrix').val() == 0 ? "" : $('#ctl00_ContentPlaceHolder1_txtFourthCustMatrix').val();

                var drpDelTermsFirstCustMatrix = $('#ctl00_ContentPlaceHolder1_drpDelTermsFirstCustMatrix').val();
                var drpDelTermsSecondCustMatrix = $('#ctl00_ContentPlaceHolder1_drpDelTermsSecondCustMatrix').val();
                var drpDelTermsSecondCustMatrix = $('#ctl00_ContentPlaceHolder1_drpDelTermsThirdCustMatrix').val();
                var drpDelTermsFourthCustMatrix = $('#ctl00_ContentPlaceHolder1_drpDelTermsFourthCustMatrix').val();


                if (txtFirstCustMatrix == "" && txtSecondCustMatrix == "" && txtThirdCustMatrix == "" && txtFourthCustMatrix == "") {
                    showwarning('Please fill PCB quantity field');
                    return;
                }
                if (drpDelTermsFirstCustMatrix == "0#0" && drpDelTermsSecondCustMatrix == "0#0" && drpDelTermsSecondCustMatrix == "0#0" && drpDelTermsFourthCustMatrix == "0#0") {
                    showwarning('Please fill Delivery term field');
                    return;
                }
            });
            $('#ctl00_ContentPlaceHolder1_btnBuyCustomizedPCBAssemblyMatrix').live('click', function () {

                var checkedLength = 0;
                var checkedLengthassembly = 0;
                var PCBDeliveryTerm = 0;
                var PCBAssemblyDeliveryTerm = 0;
                var PCBAssemblyQuantity = 0
                var i;
                for (i = 1; i < 5; i++) {
                    if ($("#ctl00_ContentPlaceHolder1_chkPCBCombineMatrix" + i).prop('checked')) {
                        checkedLength = checkedLength + 1;
                        PCBDeliveryTerm = $('#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm' + i).val();
                        PCBAssemblyDeliveryTerm = $('#ctl00_ContentPlaceHolder1_ddlPCBAssemblyeliveryterm' + i).val();
                        PCBAssemblyQuantity = $('#ctl00_ContentPlaceHolder1_txtPCBAssemblyQuantity' + i).val();
                        if (PCBDeliveryTerm == "0#0") {
                            showwarning('Please select PCB delivery term for order.');
                            return;
                        }
                        if (PCBAssemblyDeliveryTerm == "0#0") {
                            showwarning('Please select Assembly delivery term for order.');
                            return;
                        }
                    }
                    //if ($("#ctl00_ContentPlaceHolder1_chkPCBAssemblyMatrix" + i).prop('checked')) {
                    //    checkedLengthassembly = checkedLengthassembly + 1;
                    //    PCBDeliveryTerm = $('#ctl00_ContentPlaceHolder1_ddlPCBDeliveryterm' + i).val();
                    //    PCBAssemblyDeliveryTerm = $('#ctl00_ContentPlaceHolder1_ddlPCBAssemblyeliveryterm' + i).val();
                    //    PCBAssemblyQuantity = $('#ctl00_ContentPlaceHolder1_txtPCBAssemblyQuantity' + i).val();
                    //    if (PCBDeliveryTerm == 0) {
                    //        showwarning('Please select PCB delivery term for order.');
                    //        return;
                    //    }
                    //    if (PCBAssemblyDeliveryTerm == 0) {
                    //        showwarning('Please select Assembly delivery term for order.');
                    //        return;
                    //    }
                    //}
                };
                if (checkedLength == 0) {
                    showwarning('Please select any checkbox for PCB / Assembly order.');
                    return;
                }
                //if (checkedLengthassembly == 0) {
                //    showwarning('Please select any checkbox for PCB / Assembly order.');
                //    return;
                //}
                $('#ctl00_ContentPlaceHolder1_hdnDeliveryDays').val(PCBDeliveryTerm);
                $('#ctl00_ContentPlaceHolder1_hdAssDeliveryDays').val(PCBAssemblyDeliveryTerm);
                $('#ctl00_ContentPlaceHolder1_ddlDelTerms').val(PCBDeliveryTerm).change();
                $('#ctl00_ContentPlaceHolder1_ddlAssemblyDelTerms').val(PCBAssemblyDeliveryTerm).change();
                $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val(PCBAssemblyQuantity);
                PLACEORDER.setAssemblyDeliveryDays(PCBAssemblyDeliveryTerm);
                PLACEORDER.DIVCLOSECustomizedPCBAssemblyMatrix();
            });

            $('#ctl00_ContentPlaceHolder1_txtXNew').live('change', function () {
                var Assemblyqty = $("#ctl00_ContentPlaceHolder1_txtXNew").val().trim();
                if (Assemblyqty == 0) {
                    $('#ctl00_ContentPlaceHolder1_txtXNew').val(1);
                }
            });
            $('#ctl00_ContentPlaceHolder1_txtYNew').live('change', function () {
                var Assemblyqty = $("#ctl00_ContentPlaceHolder1_txtYNew").val().trim();
                if (Assemblyqty == 0) {
                    $('#ctl00_ContentPlaceHolder1_txtYNew').val(1);
                }
            });
            $('#ctl00_ContentPlaceHolder1_txtQuantityNew').live('change', function () {
                var Assemblyqty = $("#ctl00_ContentPlaceHolder1_txtQuantityNew").val().trim();
                if (Assemblyqty == 0) {
                    $('#ctl00_ContentPlaceHolder1_txtQuantityNew').val(1);
                }
            });
        });
    }
}
$(document).ready(function () {
    PLACEORDER.init();
});