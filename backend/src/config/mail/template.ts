import { url } from "inspector";

class Template {
    public html(url) {
        return `</html>

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
                @import url(https://fonts.googleapis.com/css?family=Roboto:300);
                /*Calling our web font*/
        
                /* Some resets and issue fixes */
                #outlook a {
                    padding: 0;
                }
        
                body {
                    width: 100% !important;
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    margin: 0;
                    padding: 0;
                }
        
                .ReadMsgBody {
                    width: 100%;
                }
        
                .ExternalClass {
                    width: 100%;
                }
        
                /* .backgroundTable {
                    margin: 0 auto;
                    padding: 0;
                    width: 100%;
                     !important;
                } */
        
                table td {
                    border-collapse: collapse;
                }
        
                .ExternalClass * {
                    line-height: 115%;
                }
        
                /* End reset */
        
        
                /* These are our tablet/medium screen media queries */
                @media screen and (max-width: 630px) {
        
        
                    /* Display block allows us to stack elements */
                    *[class="mobile-column"] {
                        display: block;
                    }
        
                    /* Some more stacking elements */
                    *[class="mob-column"] {
                        float: none !important;
                        width: 100% !important;
                    }
        
                    /* Hide stuff */
                    *[class="hide"] {
                        display: none !important;
                    }
        
                    /* This sets elements to 100% width and fixes the height issues too, a god send */
                    *[class="100p"] {
                        width: 100% !important;
                        height: auto !important;
                    }
        
                    /* For the 2x2 stack */
                    *[class="condensed"] {
                        padding-bottom: 40px !important;
                        display: block;
                    }
        
                    /* Centers content on mobile */
                    *[class="center"] {
                        text-align: center !important;
                        width: 100% !important;
                        height: auto !important;
                    }
        
                    /* 100percent width section with 20px padding */
                    *[class="100pad"] {
                        width: 100% !important;
                        padding: 20px;
                    }
        
                    /* 100percent width section with 20px padding left & right */
                    *[class="100padleftright"] {
                        width: 100% !important;
                        padding: 0 20px 0 20px;
                    }
        
                    /* 100percent width section with 20px padding top & bottom */
                    *[class="100padtopbottom"] {
                        width: 100% !important;
                        padding: 20px 0px 20px 0px;
                    }
        
        
                }
            </style>
        
        
        
            <style type="text/css">
        
            </style>
        
            <style type="text/css">
        
            </style>
        </head>
        
        
        <div style="background:#E5E5E5;">
        
        </div>
        
        <body style="padding:0; margin:0" bgcolor="#ffffff">
        
            <table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%">
                <tr>
                    <td align="center" valign="top">
        
                        <table width="640" border="0" cellspacing="0" cellpadding="0" class="hide">
                            <tr>
                                <td height="20"></td>
                            </tr>
                        </table>
        
                        <table width="640" cellspacing="0" cellpadding="0" bgcolor="#" class="100p">
                            <tr>
                                <td bgcolor="F0F3F8" width="640" valign="top" class="100p">
        
                                    <div>
                                        <table width="640" border="0" cellspacing="0" cellpadding="20" class="100p">
                                            <tr>
                                                <td valign="top">
                                                    <table border="0" cellspacing="0" cellpadding="0" width="600" class="100p">
                                                        <tr>
                                                            <td align="center" width="50%" class="100p"><img src="http://negobot.com.br/uploads/Logo.png"
                                                                    width="100" height="100" />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellspacing="0" cellpadding="0" width="600" class="100p">
                                                        <tr>
                                                            <td height="35"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" style="color:#000000; font-size:24px;">
                                                                <font face="'Roboto', Arial, sans-serif">
                                                                    <span style="font-size:16px;">Olá, você solicitou a
                                                                        redefinição da sua senha,
                                                                        <br>
                                                                </font>
                                                                <font face="'Roboto', Arial, sans-serif">
                                                                    <span style="font-size:16px;">utilize o botão abaixo para redefinir
                                                                        <br /><br />
                                                                </font>
                                                                <table border="0" cellspacing="0" cellpadding="10" style=" border-radius: 100px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                                                                             cursor: pointer;  background-color: #2D8EFF;
                                                                             width: 50%;">
                                                                    <tr>
                                                                        <td align="center"
                                                                            style="color:#ffffff; font-size:16px;">
                                                                            <font face="'Roboto', Arial, sans-serif"><a href="${url}"
                                                                                    style="color:#ffffff; text-decoration:none;">Acessar</a>
                                                                            </font>
                                                                        </td>
                                                                    </tr>
                                                                </table>
        
        
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="35"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        
        </body>
        
        </html>`;
    }
}

export default new Template();