import nodemailer from 'nodemailer'
import fetch from 'node-fetch'

export const emailPublicidad = async (datos) => {
	const htmlTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
	 <head>
	  <meta charset="UTF-8">
	  <meta content="width=device-width, initial-scale=1" name="viewport">
	  <meta name="x-apple-disable-message-reformatting">
	  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	  <meta content="telephone=no" name="format-detection">
	  <title>Nuevo mensaje 4</title><!--[if (mso 16)]>
		<style type="text/css">
		a {text-decoration: none;}
		</style>
		<![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG></o:AllowPNG>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	  <style type="text/css">
	#outlook a {
		padding:0;
	}
	.ExternalClass {
		width:100%;
	}
	.ExternalClass,
	.ExternalClass p,
	.ExternalClass span,
	.ExternalClass font,
	.ExternalClass td,
	.ExternalClass div {
		line-height:100%;
	}
	.es-button {
		mso-style-priority:100!important;
		text-decoration:none!important;
	}
	a[x-apple-data-detectors] {
		color:inherit!important;
		text-decoration:none!important;
		font-size:inherit!important;
		font-family:inherit!important;
		font-weight:inherit!important;
		line-height:inherit!important;
	}
	.es-desk-hidden {
		display:none;
		float:left;
		overflow:hidden;
		width:0;
		max-height:0;
		line-height:0;
		mso-hide:all;
	}
	.es-button-border:hover {
		border-color:transparent transparent transparent transparent!important;
		background:transparent!important;
		border-style:solid solid solid solid!important;
	}
	.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
		background:#ffd300!important;
		border-color:#ffd300!important;
	}
	[data-ogsb] .es-button {
		border-width:0!important;
		padding:10px 25px 10px 25px!important;
	}
	[data-ogsb] .es-button.es-button-1 {
		padding:10px 20px!important;
	}
	@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:28px!important; text-align:center } h2 { font-size:20px!important; text-align:center } h3 { font-size:18px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:28px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:20px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:18px!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:13px!important; display:inline-block!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
	</style>
	 </head>
	 <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0;Margin:0">
	  <div class="es-wrapper-color" style="background-color:#FFFFFF"><!--[if gte mso 9]>
				<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
					<v:fill type="tile" color="#ffffff"></v:fill>
				</v:background>
			<![endif]-->
	   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FFFFFF">
		 <tr style="border-collapse:collapse">
		  <td valign="top" style="padding:0;Margin:0">
		   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
			 <tr style="border-collapse:collapse">
			  <td class="es-info-area" align="center" style="padding:0;Margin:0">
			   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
				 <tr style="border-collapse:collapse">
				  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
				   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
					 <tr style="border-collapse:collapse">
					  <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
					   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						 <tr style="border-collapse:collapse">
						  <td align="left" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Put your preheader text here</p></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table></td>
				 </tr>
			   </table></td>
			 </tr>
		   </table>
		   <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
			 <tr style="border-collapse:collapse">
			  <td align="center" style="padding:0;Margin:0">
			   <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
				 <tr style="border-collapse:collapse">
				  <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#ededed" bgcolor="#EDEDED"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:240px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td align="center" valign="top" style="padding:0;Margin:0;width:240px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;font-size:0px"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_a61faaa44a0c89d267740324913cacd4/images/hotelacapulco2.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="78"></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:300px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					 <tr class="es-mobile-hidden" style="border-collapse:collapse">
					  <td align="left" style="padding:0;Margin:0;width:300px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr class="links" style="border-collapse:collapse">
							  <td align="center" valign="top" width="25.00%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0" bgcolor="transparent"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#161616;font-size:14px;font-weight:bold" href="https://viewstripo.email/">Tour</a></td>
							  <td align="center" valign="top" width="25.00%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0" bgcolor="transparent"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#161616;font-size:14px;font-weight:bold" href="https://viewstripo.email/">Hotels</a></td>
							  <td align="center" valign="top" width="25.00%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0" bgcolor="transparent"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#161616;font-size:14px;font-weight:bold" href="https://viewstripo.email/">Rental</a></td>
							  <td align="center" valign="top" width="25.00%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:10px;border:0" bgcolor="transparent"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#161616;font-size:14px;font-weight:bold" href="https://viewstripo.email/">About Us</a></td>
							 </tr>
						   </table></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td></tr></table><![endif]--></td>
				 </tr>
			   </table></td>
			 </tr>
		   </table>
		   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
			 <tr style="border-collapse:collapse">
			  <td align="center" bgcolor="#ffffff" style="padding:0;Margin:0;background-color:#ffffff">
			   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
				 <tr style="border-collapse:collapse">
				  <td align="left" style="padding:0;Margin:0">
				   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:600px">
					   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;position:relative"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img class="adapt-img" src="https://yfipjc.stripocdn.email/content/guids/bannerImgGuid/images/image16663751089034820.png" alt title width="600" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table></td>
				 </tr>
				 <tr style="border-collapse:collapse">
				  <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:25px;padding-bottom:25px;background-image:url(https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/55551559720821558.jpg);background-position:center bottom;background-color:#f1f1f1;background-repeat:no-repeat" bgcolor="#f1f1f1" background="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/55551559720821558.jpg"><!--[if mso]><table  style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:258px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:258px">
					   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						 <tr style="border-collapse:collapse">
						  <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0px"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_a61faaa44a0c89d267740324913cacd4/images/formatfactoryimg_3898_ygY.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="254"></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:10px"></td><td style="width:292px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					 <tr style="border-collapse:collapse">
					  <td align="left" style="padding:0;Margin:0;width:292px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center bottom" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-left:15px;padding-right:15px;padding-top:25px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333">Un lugar perfecto<br>para descansar&nbsp;</h2></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise you’ll enjoy every step you make.</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="Margin:0;padding-bottom:10px;padding-top:15px;padding-left:15px;padding-right:15px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
		<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
					style="height:36px; v-text-anchor:middle; width:124px" arcsize="50%" stroke="f"  fillcolor="#ffd300">
			<w:anchorlock></w:anchorlock>
			<center style='color:#0e0e0e; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>SEE MORE</center>
		</v:roundrect></a>
	<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:transparent;background:#FFD300;border-width:0px;display:inline-block;border-radius:22px;width:auto;mso-hide:all;box-shadow:0px 0px 7px 0px #ffd300"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0E0E0E;font-size:14px;border-style:solid;border-color:#FFD300;border-width:10px 25px 10px 25px;display:inline-block;background:#FFD300;border-radius:22px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">SEE MORE</a></span><!--<![endif]--></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td></tr></table><![endif]--></td>
				 </tr>
			   </table></td>
			 </tr>
		   </table>
		   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
			 <tr style="border-collapse:collapse">
			  <td align="center" style="padding:0;Margin:0">
			   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
				 <tr style="border-collapse:collapse">
				  <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#faf7f2" bgcolor="#FAF7F2">
				   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
					 <tr style="border-collapse:collapse">
					  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
					   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/13841559664392300.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="51"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333">Promociones para tu siguiente visita<br></h2></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#666666;font-size:13px"><strong>Traveling across the world is now much </strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#666666;font-size:13px"><strong>easier and more fun.</strong></p></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table></td>
				 </tr>
				 <tr style="border-collapse:collapse">
				  <td align="left" style="Margin:0;padding-top:15px;padding-bottom:15px;padding-left:20px;padding-right:20px;background-position:center bottom;background-color:#faf7f2" bgcolor="#FAF7F2"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center center;background-color:#ffffff;border-radius:6px" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/63281559738615868.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="79"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:5px;padding-right:5px"><h5 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px">Paris, France</h5></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:16px;color:#999999;font-size:13px">Paris is a global center for<br>art, fashion, gastronomy, and culture.</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px;font-size:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/96631559738171916.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="11"></a></td>
						 </tr>
					   </table></td>
					  <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p20b es-m-p0r" align="center" style="padding:0;Margin:0;width:173px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center center;background-color:#ffffff;border-radius:6px" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/4981559739732992.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="79"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:5px;padding-right:5px"><h5 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px">Tokyo, Japan</h5></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:16px;color:#999999;font-size:13px">Tokyo, busy capital, <br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:16px;color:#999999;font-size:13px">mixes ultra-modern and traditional.</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px;font-size:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/96631559738171916.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="11"></a></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p0r" align="center" style="padding:0;Margin:0;width:173px">
					   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-position:center center;background-color:#ffffff;border-radius:6px" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-bottom:5px;padding-top:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/25571559739905255.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="79"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-left:5px;padding-right:5px"><h5 style="Margin:0;line-height:17px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px">New York, USA</h5></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:16px;color:#999999;font-size:13px">NY City comprises 5 boroughs between the<br>Ocean.</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px;font-size:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/96631559738171916.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="11"></a></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td></tr></table><![endif]--></td>
				 </tr>
			   </table></td>
			 </tr>
		   </table>
		   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
			 <tr style="border-collapse:collapse">
			  <td align="center" style="padding:0;Margin:0">
			   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
				 <tr style="border-collapse:collapse">
				  <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
				   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
					 <tr style="border-collapse:collapse">
					  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
					   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/13841559664392300.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="51"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333">Tenemos las siguientes ofertas para ti</h2></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table></td>
				 </tr>
				 <tr style="border-collapse:collapse">
				  <td align="left" bgcolor="#fafafa" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#fafafa"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:274px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:274px">
					   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:6px;background-color:#ffffff;background-position:center bottom" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/98791559756513015.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:274px" width="274"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">Discover the tradition in Kyoto</h4></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="1%" align="left" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;padding-left:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/54331559755751368.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="21"></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" width="99%" align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#333333;font-size:13px"><strong>5 days 4 nights</strong></p></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">The other day the grass was brown,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">now it’s green because I ain’t give up. Never surrender...</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="60%" align="left" style="padding:0;Margin:0;padding-left:10px;padding-bottom:15px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
		<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
					style="height:36px; v-text-anchor:middle; width:130px" arcsize="50%" stroke="f"  fillcolor="#ffd300">
			<w:anchorlock></w:anchorlock>
			<center style='color:#0e0e0e; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>VIEW DETAIL</center>
		</v:roundrect></a>
	<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:transparent;background:#FFD300;border-width:0px;display:inline-block;border-radius:22px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0E0E0E;font-size:14px;border-style:solid;border-color:#FFD300;border-width:10px 20px;display:inline-block;background:#FFD300;border-radius:22px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;box-shadow:#ffd300 0px 0px 7px 0px">VIEW DETAIL</a></span><!--<![endif]--></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" class="es-m-txt-c" width="40%" align="right" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-bottom:15px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333"><strong>$2100</strong></h2></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:10px"></td><td style="width:276px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:276px">
					   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:6px;background-color:#ffffff" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/71051559757237924.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:274px" width="274"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">Around Roma - Italy</h4></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="1%" align="left" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;padding-left:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/54331559755751368.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="21"></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" width="99%" align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#333333;font-size:13px"><strong>7 days 6&nbsp;nights</strong></p></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">The other day the grass was brown, now it’s green because I ain’t give up. Never surrender...</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="60%" align="left" style="padding:0;Margin:0;padding-left:10px;padding-bottom:15px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
		<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
					style="height:36px; v-text-anchor:middle; width:130px" arcsize="50%" stroke="f"  fillcolor="#ffd300">
			<w:anchorlock></w:anchorlock>
			<center style='color:#0e0e0e; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>VIEW DETAIL</center>
		</v:roundrect></a>
	<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:transparent;background:#FFD300;border-width:0px;display:inline-block;border-radius:22px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0E0E0E;font-size:14px;border-style:solid;border-color:#FFD300;border-width:10px 20px;display:inline-block;background:#FFD300;border-radius:22px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;box-shadow:#ffd300 0px 0px 7px 0px">VIEW DETAIL</a></span><!--<![endif]--></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" class="es-m-txt-c" width="40%" align="right" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-bottom:15px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333"><strong>$1050</strong></h2></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td></tr></table><![endif]--></td>
				 </tr>
				 <tr style="border-collapse:collapse">
				  <td align="left" bgcolor="#fafafa" style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:25px;background-color:#fafafa;background-position:center bottom"><!--[if mso]><table  style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:274px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					 <tr style="border-collapse:collapse">
					  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:274px">
					   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:6px;background-color:#ffffff" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/52781559757458853.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:274px" width="274"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">Around Alaska - the Ice land</h4></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="1%" align="left" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;padding-left:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/54331559755751368.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="21"></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" width="99%" align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#333333;font-size:13px"><strong>10 days 9&nbsp;nights</strong></p></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">The other day the grass was brown,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">now it’s green because I ain’t give up. Never surrender...</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="60%" align="left" style="padding:0;Margin:0;padding-left:10px;padding-bottom:15px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
		<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
					style="height:36px; v-text-anchor:middle; width:130px" arcsize="50%" stroke="f"  fillcolor="#ffd300">
			<w:anchorlock></w:anchorlock>
			<center style='color:#0e0e0e; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>VIEW DETAIL</center>
		</v:roundrect></a>
	<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:transparent;background:#FFD300;border-width:0px;display:inline-block;border-radius:22px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0E0E0E;font-size:14px;border-style:solid;border-color:#FFD300;border-width:10px 20px;display:inline-block;background:#FFD300;border-radius:22px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;box-shadow:#ffd300 0px 0px 7px 0px">VIEW DETAIL</a></span><!--<![endif]--></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" class="es-m-txt-c" width="40%" align="right" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-bottom:15px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333"><strong>$4200</strong></h2></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td><td style="width:10px"></td><td style="width:276px" valign="top"><![endif]-->
				   <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					 <tr style="border-collapse:collapse">
					  <td align="left" style="padding:0;Margin:0;width:276px">
					   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:6px;background-color:#ffffff" bgcolor="#ffffff" role="presentation">
						 <tr style="border-collapse:collapse">
						  <td align="center" style="padding:0;Margin:0;font-size:0"><img class="adapt-img" src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/57341559757625323.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:274px" width="274"></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px"><h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif">Santorini - Greece</h4></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="1%" align="left" style="padding:0;Margin:0;padding-top:5px;padding-right:5px;padding-left:15px;font-size:0"><img src="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/54331559755751368.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="21"></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" width="99%" align="left" class="es-m-txt-l" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#333333;font-size:13px"><strong>5 days 4 nights</strong></p></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td align="left" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">The other day the grass was brown,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">now it’s green because I ain’t give up. Never surrender...</p></td>
						 </tr>
						 <tr style="border-collapse:collapse">
						  <td style="padding:0;Margin:0">
						   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							 <tr style="border-collapse:collapse">
							  <td width="60%" align="left" style="padding:0;Margin:0;padding-left:10px;padding-bottom:15px"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
		<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
					style="height:36px; v-text-anchor:middle; width:130px" arcsize="50%" stroke="f"  fillcolor="#ffd300">
			<w:anchorlock></w:anchorlock>
			<center style='color:#0e0e0e; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:12px; font-weight:700; line-height:12px;  mso-text-raise:1px'>VIEW DETAIL</center>
		</v:roundrect></a>
	<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:transparent;background:#FFD300;border-width:0px;display:inline-block;border-radius:22px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#0E0E0E;font-size:14px;border-style:solid;border-color:#FFD300;border-width:10px 20px;display:inline-block;background:#FFD300;border-radius:22px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center;box-shadow:#ffd300 0px 0px 7px 0px">VIEW DETAIL</a></span><!--<![endif]--></td>
							  <td width="50%" align="left" style="padding:0;Margin:0">
							   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
								 <tr style="border-collapse:collapse">
								  <td esdev-links-color="#ffffff" class="es-m-txt-c" width="40%" align="right" style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-bottom:15px"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#333333"><strong>$3100</strong></h2></td>
								 </tr>
							   </table></td>
							 </tr>
						   </table></td>
						 </tr>
					   </table></td>
					 </tr>
				   </table><!--[if mso]></td></tr></table><![endif]--></td>
				 </tr>
			   </table></td>
			 </tr>
		   </table>
		   <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
			 <tr style="border-collapse:collapse">
			  <td align="center" style="padding:0;Margin:0;background-image:url(https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/27221559766064763.jpg);background-position:center bottom;background-repeat:no-repeat;background-color:transparent" bgcolor="transparent" background="https://yfipjc.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/27221559766064763.jpg"><!--[if gte mso 9]>
	  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:300px;">
		<v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_43097ab2190c73417e94e30d214c5f41/images/27221559766064763.jpg"></v:fill>
		<v:textbox inset="0,0,0,0">
	  <![endif]-->
			   <div>
				<table bgcolor="transparent" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
				  <tr style="border-collapse:collapse">
				   <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-position:center top;background-color:transparent" bgcolor="transparent"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					  <tr style="border-collapse:collapse">
					   <td align="center" valign="top" style="padding:0;Margin:0;width:270px">
						<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:25px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:21px">Siguenos en nuestras redes</h4></td>
						  </tr>
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">It is a long established fact that a reader will be distracted by the readable&nbsp;</p></td>
						  </tr>
						  <tr class="es-mobile-hidden" style="border-collapse:collapse">
						   <td align="center" height="30" style="padding:0;Margin:0"></td>
						  </tr>
						</table></td>
					  </tr>
					</table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					  <tr style="border-collapse:collapse">
					   <td align="left" style="padding:0;Margin:0;width:270px">
						<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0"><h4 style="Margin:0;line-height:25px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#333333;font-size:21px">Contactanos</h4></td>
						  </tr>
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">It is a long established fact that a reader will be distracted by the readable&nbsp;</p></td>
						  </tr>
						</table></td>
					  </tr>
					</table><!--[if mso]></td></tr></table><![endif]--></td>
				  </tr>
				  <tr style="border-collapse:collapse">
				   <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-position:center top"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
					  <tr style="border-collapse:collapse">
					   <td align="left" style="padding:0;Margin:0;width:270px">
						<table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation">
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0;padding-top:5px;font-size:0">
							<table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
							  <tr style="border-collapse:collapse">
							   <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://yfipjc.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
							   <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Twitter" src="https://yfipjc.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
							   <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><img title="Instagram" src="https://yfipjc.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
							   <td align="center" valign="top" style="padding:0;Margin:0"><img title="Youtube" src="https://yfipjc.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
							  </tr>
							</table></td>
						  </tr>
						</table></td>
					  </tr>
					</table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
					  <tr style="border-collapse:collapse">
					   <td align="left" style="padding:0;Margin:0;width:270px">
						<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0;padding-top:10px"><h4 style="Margin:0;line-height:25px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#0e0e0e;font-size:21px"><a target="_blank" href="tel:000-111-0111" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#0e0e0e;font-size:21px">000-111-0111</a></h4></td>
						  </tr>
						  <tr style="border-collapse:collapse">
						   <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#060606;font-size:16px"><a target="_blank" href="mailto:info@company.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#060606;font-size:16px">info@company.com</a></p></td>
						  </tr>
						</table></td>
					  </tr>
					</table><!--[if mso]></td></tr></table><![endif]--></td>
				  </tr>
				</table><!--[if gte mso 9]>
		</v:textbox>
	  </v:rect>
	  <![endif]-->
			   </div></td>
			 </tr>
		   </table></td>
		 </tr>
	   </table>
	  </div>
	 </body>
	</html>`

	const url = 'http://localhost:4000/api/clientes/pruebas'

	const options = {
		mode: 'no-cors',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()
		const copia = [...result]
		console.log(copia)

		const { email, nombre } = datos

		//Transport Mailtrap
		const transport = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		})

		//Informacion del email
		const info = await transport.sendMail({
			from: 'Dashboard <cuentas@bungie.net>',
			to: copia,
			subject: 'Correo masivo1',
			text: 'Correo masivo',
			html: htmlTemplate,
		})
	} catch (error) {
		console.log(error)
	}
}
