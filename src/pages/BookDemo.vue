<template>
    <Layout>
        <div class="pt-8 lg:pt-16 xl:pt-0">
            <section class="py-16 md:py-20 xl:py-32">
                <div class="container px-5 sm:px-8 xl:px-4 xl:mt-16">
                    <div class="grid gap-10 lg:grid-cols-2 xl:gap-16">
                        <div class="xl:w-10/12 lg:mt-32">
                            <h1 class="mb-3 xl:mb-5">Get In Touch</h1>
                            <p class="mb-8 md:mb-10">Let us show you how Cab9 can make your business more efficient,
                                provide your staff with the software they need whilst always focusing on helping your
                                business become more profitable.</p>
                            <div class="leading-relaxed">
                                <a class="font-medium tracking-wider text-primary hover:text-red-700"
                                    href="tel:+44 203 388 8999">+44 203 388 8999</a>
                                <br />
                                <a class="font-medium tracking-wider text-primary hover:text-red-700"
                                    href="mailto:sales@cab9.co">sales@cab9.co</a>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="mb-3 tracking-widest uppercase xl:mb-5 text-primary">Book a demo today</h4>
                            <p class="mb-8">
                                Please fill the information below and press Submit. <br />
                                A member of staff will come back within 1 business day.
                            </p>

                            <!-- Note :
   - You can modify the font style and form style to suit your website.
   - Code lines with comments ���Do not remove this code���  are required for the form to work properly, make sure that you do not remove these lines of code.
   - The Mandatory check script can modified as to suit your business needs.
   - It is important that you test the modified form before going live.-->
                            <div id="crmWebToEntityForm" style="width:100%">
                                <!-- <meta http-equiv="content-type" content="text/html;charset=UTF-8"> -->
                                <form action="https://crm.zoho.com/crm/WebToLeadForm"
                                    name="WebToLeads3851765000000444001" method="POST"
                                    onSubmit="javascript:document.charset=&quot;UTF-8&quot;; return checkMandatory3851765000000444001()"
                                    accept-charset="UTF-8">
                                    <input type="text" style="display:none;" name="xnQsjsdp"
                                        value="89f76ee1fe190d8e5dec3c0f698d4159ab42769526c6ef0ed598c449e46597aa" />
                                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                    <input type="text" style="display:none;" name="xmIwtLD"
                                        value="8ba9e80f3d2a2958ea33a85eab35767b6abb33571efeac62aa4fed7d9c3a3251" />
                                    <input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
                                    <input type="text" style="display:none;" name="returnURL"
                                        value="https://cab9.app" />

                                    <div class="form-group">
                                        <input type="text" class="form-control" maxlength="100" name="Company"
                                            id="company" required />
                                        <label for="company">Company</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" maxlength="40" name="First Name"
                                            id="first-name" required />
                                        <label for="first-name">First Name</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" maxlength="80" name="Last Name"
                                            id="last-name" required />
                                        <label for="last-name">Last Name</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" maxlength="30" name="Phone" id="phone"
                                            required />
                                        <label for="phone">Phone</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" maxlength="100" name="Email" id="email"
                                            required />
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="form-group">
                                        <select name="LEADCF7" id="fleet-size" class="form-control" required>
                                            <option value="-None-">Fleet Size</option>
                                            <option value="Up&#x20;to&#x20;10">Up to 10</option>
                                            <option value="Up&#x20;to&#x20;20">Up to 20</option>
                                            <option value="Up&#x20;to&#x20;50">Up to 50</option>
                                            <option value="Up&#x20;to&#x20;100">Up to 100</option>
                                            <option value="Over&#x20;100">Over 100</option>
                                        </select>
                                        <label for="fleet-size">Fleet Size</label>
                                    </div>

                                    <div class="form-group">
                                        <textarea name="Description" class="form-control" maxlength="32000"
                                            style="width:100%;" placeholder="Additional Comments"></textarea>
                                    </div>
                                    <div class="mt-16">
                                        <input class="mr-2 btn-primary" id="formsubmit" type="submit" value="Submit" />
                                        <input class="btn-gray-500" name="reset" type="reset" value="Reset" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    </Layout>
</template>
<script>
/* eslint-disable */
var mndFileds = new Array('Company', 'First Name', 'Last Name', 'Phone', 'Email');
var fldLangVal = new Array('Company', 'First Name', 'Last Name', 'Phone', 'Email');
var name = '';
var email = '';

function checkMandatory3851765000000444001() {
	for (i = 0; i < mndFileds.length; i++) {
		var fieldObj = document.forms['WebToLeads3851765000000444001'][mndFileds[i]];
		if (fieldObj) {
			if (fieldObj.value.replace(/^\s+|\s+$/g, '').length == 0) {
				if (fieldObj.type == 'file') {
					alert('Please select a file to upload.');
					fieldObj.focus();
					return false;
				}
				alert(fldLangVal[i] + ' cannot be empty.');
				fieldObj.focus();
				return false;
			} else if (fieldObj.nodeName == 'SELECT') {
				if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
					alert(fldLangVal[i] + ' cannot be none.');
					fieldObj.focus();
					return false;
				}
			} else if (fieldObj.type == 'checkbox') {
				if (fieldObj.checked == false) {
					alert('Please accept  ' + fldLangVal[i]);
					fieldObj.focus();
					return false;
				}
			}
			try {
				if (fieldObj.name == 'Last Name') {
					name = fieldObj.value;
				}
			} catch (e) {
			}
		}
	}
	document.getElementById('formsubmit').disabled = true;
}
</script>
<script>
export default {
	metaInfo: {
		title: 'Book Demo'
	}
};
</script>

<style lang='scss' scoped>
#crmWebToEntityForm tr,
#crmWebToEntityForm td {
	padding: 6px;
	border-spacing: 0px;
	border-width: 0px;
}

#crmWebToEntityForm {
	.form-group {
		margin-bottom: 32px;
		position: relative;
		border: 0;


		label {
			text-transform: uppercase;
			font-size: 12px;
			line-height: 12px;
			font-weight: 600;
			margin-left: 0;
		}

		.form-control {
			border: none;
			height: 35px;
			padding: 0;
			background: none;
			-webkit-appearance: none;
			color: #2c2c2c;
			background: none;
			outline: 0;
			border-bottom: 1px solid #ddd !important;
			padding: 5px 0;
			line-height: normal;
			font-size: 16px;
			vertical-align: middle;
			width: 100%;


			&:focus {
				box-shadow: none;
			}

		}

		textarea {
			width: 100%;
			height: 100px !important;
		}

		p {
			padding: 0;
		}

		&.focused {
			border-color: rgba(0, 0, 0, 0.1) !important;
			background-color: #f0f0f0;
		}

		.error-msg {
			position: absolute;
			bottom: -25px;
		}
	}

	.form-control {
		margin-bottom: 0 !important;
	}

	.form-control[required] + label {
		text-transform: none;
		font-weight: 300;
		position: absolute;
		top: 5px;
		left: 0;
		color: #777;
		font-size: 16px;
		letter-spacing: 0;
		/* the negative of the input width */
	}

	.form-control[required] + label:after {
		content: '*';
		color: red;
	}

	/* show the placeholder when input has no content (no content = invalid) */
	.form-control[required]:invalid + label {
		display: inline-block;
	}

	/* hide the placeholder when input has some text typed in */
	.form-control[required]:valid + label {
		display: none;
	}

	select {
		background-image: url('../assets/images/down-arrow.png') !important;
		background-repeat: no-repeat !important;
		background-size: 11px !important;
		background-position: right 7px center !important;
	}

}

</style>
