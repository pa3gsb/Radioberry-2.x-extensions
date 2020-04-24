window.fcPreChatform = (function () {

    var fcPreChatform = {

        chatCustomData: {
            userCreated: false,
            userOnLoad: false,
            userCreatedfromTrigger: false,
            userCreatedfromForm: false,
            formCreated: false
        },

        addCss: function (stylesheet) {
            var head = document.head,
                link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = stylesheet;
            head.appendChild(link);
        },

        generateOptions: function (field) {
            var options = '<option value="">...</option>';
            for (var i = 0; i < field.options.length; i++) {
                options += '<option value="' + field.options[i] + '">' + field.options[i] + '</option>';
            }
            return options;
        },

        generatePreChatHTML: function (fcPreChatFormData) {
            var _self = this;
            var user_form_begin = '<div class="chat-fc-form-outer">' +
                '<p class="fc-header">' + ((typeof (fcPreChatFormData) === "undefined") ? 'Freshchat' : fcPreChatFormData.heading) + '<span class="fc-minimize" onclick="fcPreChatform.on_fc_pre_form_close()">X</span></p>' +
                '<div class="fc-form" dir="auto">' +
                '<p>' + ((typeof (fcPreChatFormData) === "undefined") ? 'We can\'t wait to talk to you. But first, please take a couple of moments to tell us a bit about yourself.' : fcPreChatFormData.textBanner) + '</p>' +
                '<form class="chat-fc-form">' +
                '<ul>';
            var user_form_end = '</ul>' +
                '</form>' +
                '<a href="#" class="fc-button" onclick="fcPreChatform.on_fc_pre_form_submit(); return false;">' + ((typeof (fcPreChatFormData) === "undefined") ? 'Submit' : fcPreChatFormData.SubmitLabel) + '</a>' +
                '</div>' +
                '</div>';
            var fields = fcPreChatFormData.fields;
            var fieldKeys = Object.keys(fields);
            var temp = '';
            for (var i = 0; i < fieldKeys.length; i++) {
                if (i <= 4) {
                    temp += '<li class="pre-fc-field">' +
                        '<label>' + fields[fieldKeys[i]].label + '<span>' + (fields[fieldKeys[i]].required === "yes" ? ' *' : '') + '</span></label>' +
                        '<' + (fields[fieldKeys[i]].type === "dropdown" ? "select " : "input ") + 'type="' + (fields[fieldKeys[i]].type === "phone" ? "text" : fields[fieldKeys[i]].type) + '" id="chat-fc-' + fields[fieldKeys[i]].label.replace(/ /g, '').toLowerCase() + '" ' + (fields[fieldKeys[i]].type === "dropdown" ? 'onChange' : 'onBlur') + '="fcPreChatform.fc_validate_on_blur(event);" ' + (fields[fieldKeys[i]].required === "yes" ? 'required ' : '') +
                        '' + (fields[fieldKeys[i]].type === "phone" ? 'pattern="[0-9-+# ]{5,20}"' : '') + '/>' +
                        ((fields[fieldKeys[i]].type === "dropdown") ? _self.generateOptions(fields[fieldKeys[i]]) : '') +
                        '</' + (fields[fieldKeys[i]].type === "dropdown" ? "select" : "input") + '>' +
                        '<div class="pre-fc-error fc-hide" id="chat-fc-' + fields[fieldKeys[i]].label.replace(/ /g, '').toLowerCase() + '-error">' + fields[fieldKeys[i]].error + '</div>' +
                        '</li>';
                }
            }
            var user_form = user_form_begin + temp + user_form_end;
            return user_form;
        },

        createPreChatForm: function (fcPreChatFormData, user_form) {
            document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'hidden';
            if (this.chatCustomData.formCreated === false) {
                var tmp = document.createElement('div'),
                    _self = this;
                tmp.innerHTML = user_form;
                document.body.appendChild(tmp.children[0]);
                document.querySelector('.chat-fc-form-outer p.fc-header').style.backgroundColor = (typeof (fcPreChatFormData.mainbgColor) != "undefined") ? fcPreChatFormData.mainbgColor : '';
                document.querySelector('.chat-fc-form-outer .fc-button').style.backgroundColor = (typeof (fcPreChatFormData.mainbgColor) != "undefined") ? fcPreChatFormData.mainbgColor : '';
                document.querySelector('.chat-fc-form-outer p.fc-header').style.color = (typeof (fcPreChatFormData.mainbgColor) != "undefined") ? fcPreChatFormData.maintxColor : '';
                document.querySelector('.chat-fc-form-outer .fc-button').style.color = (typeof (fcPreChatFormData.mainbgColor) != "undefined") ? fcPreChatFormData.maintxColor : '';
                _self.chatCustomData.formCreated = true;
            }
            else {
                document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'hidden';
                document.querySelector(".chat-fc-form-outer") === null ? null : document.querySelector(".chat-fc-form-outer").style.visibility = 'visible';
            }
        },

        fcWidgetInit: function (fcPreChatFormData) {
            var _self = this;
            this.addCss('https://snippets.freshchat.com/css/fc-pre-chat-form-v2.css');
            var user_form = this.generatePreChatHTML(fcPreChatFormData);
            this.fields = fcPreChatFormData.fields;
            window.fcWidget.on("user:created", function (resp) {
                if (resp.success === false) {
                    console.log('User Not Created');
                }
                else if (resp.success === true && resp.data === null) {
                    console.log('User Exists on Load');
                    if (fcPreChatFormData.classicLiveChatMode === "enabled") {
                        window.fcWidget.user.clear(function (resp) {
                            console.log('User will be cleared');
                        })
                    }
                }
                else {
                    if (Object.keys(resp.data).length === 3) {
                        console.log('User Created');
                    }
                }
            });
            window.fcWidget.on("widget:opened", function (resp) {
                var awayExWdgt = fcPreChatFormData.workWithAwayExperience ? fcPreChatFormData.workWithAwayExperience : 'null';
                if (awayExWdgt === 'enabled') {
                    var timeFormat = 'HH:mm:ss';
                    var day = moment().utc().format('dddd');
                    var time = moment().utc();
                    var timeVal = moment().utc().format(timeFormat);
                    if (typeof (fcPreChatFormData.business_hours_config[day]) !== "undefined") {
                        var from = moment(fcPreChatFormData.business_hours_config[day].from, ["h:mm A"]);
                        var end = moment(fcPreChatFormData.business_hours_config[day].to, ["h:mm A"]);
                        var fromTime = moment(fcPreChatFormData.business_hours_config[day].from, ["h:mm A"]).format(timeFormat);
                        var endTime = moment(fcPreChatFormData.business_hours_config[day].to, ["h:mm A"]).format(timeFormat);
                        var check = moment(timeVal, timeFormat);
                        var fr = moment(fromTime, timeFormat);
                        var en = moment(endTime, timeFormat);
                        if (check.isBetween(fr, en) === true && moment(moment()).isBetween(from, end) === true) {
                            console.log('Within Business Hours');
                            window.fcWidget.user.isExists(function (response) {
                                if (response.data === false) {
                                    _self.chatCustomData.userCreated = false;
                                    document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'hidden';
                                    _self.createPreChatForm(fcPreChatFormData, user_form);
                                }
                                else {
                                    _self.chatCustomData.userCreated = true;
                                    window.fcWidget.user.get(function (response) {
                                        if (response.data.isNameGenerated === true) {
                                            _self.createPreChatForm(fcPreChatFormData, user_form);
                                        }
                                        else {
                                            document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'visible';
                                            document.querySelector(".chat-fc-form-outer") === null ? null : document.querySelector(".chat-fc-form-outer").style.visibility = 'hidden';
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            console.log('Outside Business Hours');
                            document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'visible';
                        }
                    }
                    else {
                        console.log('Business Hours Not Configured for ' + day + ' so widget will be always shown');
                        document.querySelector('.' + window.fcSettings.config.cssNames.widget).style.visibility = 'visible';
                    }
                }
                else {
                    window.fcWidget.user.isExists(function (response) {
                        if (response.data === false) {
                            _self.chatCustomData.userCreated = false;
                            document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'hidden';
                            _self.createPreChatForm(fcPreChatFormData, user_form);
                        }
                        else {
                            _self.chatCustomData.userCreated = true;
                            window.fcWidget.user.get(function (response) {
                                if (response.data.isNameGenerated === true) {
                                    _self.createPreChatForm(fcPreChatFormData, user_form);
                                }
                                else {
                                    document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'visible';
                                    document.querySelector(".chat-fc-form-outer") === null ? null : document.querySelector(".chat-fc-form-outer").style.visibility = 'hidden';
                                }
                            });
                        }
                    });
                }
            });
        },

        on_fc_pre_form_submit: function () {
            var _self = this;
            var form = document.querySelector(".chat-fc-form");
            form.classList.add("submitted");
            if (form.checkValidity()) {
                var submit_button = document.querySelector(".chat-fc-form-outer .fc-button");
                submit_button.classList.add("submitted");
                var fieldArray = Object.keys(_self.fields);
                var key = [], value = [];
                for (var i = 0; i < fieldArray.length; i++) {
                    if (i <= 4) {
                        if (typeof (_self.fields[fieldArray[i]].fieldId) === "undefined") {
                            _self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase() === "name" ? key.push("firstName") : _self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase() === "firstname" ? key.push("firstName") : _self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase() === "lastname" ? key.push("lastName") : key.push(_self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase());
                            value.push(document.getElementById('chat-fc-' + _self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase()).value);
                        }
                        else {
                            _self.fields[fieldArray[i]].fieldId.replace(/ /g, '').toLowerCase() === "name" ? key.push("firstName") : _self.fields[fieldArray[i]].fieldId.replace(/ /g, '').toLowerCase() === "firstname" ? key.push("firstName") : _self.fields[fieldArray[i]].fieldId.replace(/ /g, '').toLowerCase() === "lastname" ? key.push("lastName") : key.push(_self.fields[fieldArray[i]].fieldId.replace(/ /g, '').toLowerCase());
                            value.push(document.getElementById('chat-fc-' + _self.fields[fieldArray[i]].label.replace(/ /g, '').toLowerCase()).value);
                        }
                    }
                }
                var userData = {},
                    i;
                for (i = 0; i < key.length; i++) {
                    userData[key[i]] = value[i];
                }
                for (var i = 0; i < Object.keys(userData).length; i++) {
                    userData[Object.keys(userData)[i]] === "" ? delete userData[Object.keys(userData)[i]] : userData[Object.keys(userData)[i]]
                }
                window.fcWidget.user.setProperties(userData, function (response) {
                    if (response.success === true) {
                        _self.chatCustomData.userCreated = true;
                        document.querySelector(".chat-fc-form-outer").style.visibility = 'hidden';
                        document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'visible';
                        submit_button.classList.remove("submitted");
                        form.classList.remove("submitted");
                    }
                    else {
                        submit_button.classList.remove("submitted");
                        console.log('error setting user properties');
                    }
                });
            }
            else {
                this.fc_validate_on_submit();
            }
        },

        fc_validate_on_blur: function (event) {
            var fieldId = event.target.id;
            var errorMap = fieldId + '-error';
            if (event.type !== "change") {
                if (document.getElementById(fieldId).value == "") {
                    document.getElementById(errorMap).style.display = "none";
                    document.getElementById(fieldId).style.borderColor = "#ddd";
                }
                else {
                    if (document.getElementById(fieldId).checkValidity() === false) {
                        document.getElementById(errorMap).style.display = "block";
                    }
                    else {
                        document.getElementById(errorMap).style.display = "none";
                        document.getElementById(fieldId).style.borderColor = "#ddd";
                    }
                }
            }
            else {
                if (document.getElementById(fieldId).value === "") {
                    if (document.getElementById(fieldId).checkValidity() === false) {
                        document.getElementById(errorMap).style.display = "block";
                    }
                }
                else {
                    document.getElementById(errorMap).style.display = "none";
                    document.getElementById(fieldId).style.borderColor = "#ddd";
                }
            }
        },

        fc_validate_on_submit: function () {
            var _self = this;
            var fieldKeys = Object.keys(this.fields);
            var requiredFieldLabels = [];
            for (var i = 0; i < fieldKeys.length; i++) {
                if (i <= 4) {
                    if (_self.fields[fieldKeys[i]].required === "yes") {
                        requiredFieldLabels.push(_self.fields[fieldKeys[i]].label.replace(/ /g, '').toLowerCase());
                    }
                }
            }
            for (var i = 0; i < requiredFieldLabels.length; i++) {
                var field = "chat-fc-" + requiredFieldLabels[i];
                var fieldError = "chat-fc-" + requiredFieldLabels[i] + "-error";
                if (document.getElementById(field).value === "" || document.getElementById(field).value.trim() === "") {
                    document.getElementById(fieldError).style.display = "block";
                    document.getElementById(field).style.borderColor = "red";
                }
                else {
                    if (document.getElementById(field).checkValidity() === false) {
                        document.getElementById(fieldError).style.display = "block";
                        document.getElementById(field).style.borderColor = "red";
                    }
                    else {
                        document.getElementById(fieldError).style.display = "none";
                        document.getElementById(field).style.borderColor = "#ddd";
                    }
                }
            }
        },

        on_fc_pre_form_close: function () {
            window.fcWidget.close();
            document.querySelector(".chat-fc-form-outer").style.visibility = 'hidden';
            document.querySelector('.' + window.fcSettings.config.cssNames.widget + ' iframe').style.visibility = 'visible';
        }

    };
    return fcPreChatform;
}());