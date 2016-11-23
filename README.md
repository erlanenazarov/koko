<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Koko-Chicken</title>
    <link rel="stylesheet" type="text/css" href="public/css/style.css" />
    <style>
        @font-face {
            font-family: "GothamPro";
            src: url('../fonts/GothamPro/GothamProRegular.ttf');
            font-weight: normal;
            font-style: normal;
        }
        
        @font-face {
            font-family: "GothamPro-medium";
            src: url('../fonts/GothamPro/GothamProMedium.ttf');
            font-weight: normal;
            font-style: normal;
        }
        
        @font-face {
            font-family: "GothamPro-bold";
            src: url('../fonts/GothamPro/GothamProBold.ttf');
            font-weight: bold;
            font-style: normal;
        }
        
        @font-face {
            font-family: "Hitch-hike";
            src: url('../fonts/Hitch-hike.otf');
            font-weight: normal;
            font-style: normal;
        }
        
        body {
            font-size: 0;
            margin: 0;
            padding: 0;
        }
        
        .header-placeholder {
            width: 100%;
            height: 140px;
            background: #ffffff;
            position: relative;
        }
        
        header {
            width: 100%;
            height: 140px;
            background: #ffffff;
            position: fixed;
            top: 0;
        }
        
        .carcass {
            width: 1200px;
            height: inherit;
            position: relative;
            /*border: 1px solid rgba(0, 0, 0, 1);*/
            margin: 0 auto;
            border-top: 1px solid rgba(0, 0, 0, 0);
        }
        
        .header-image {
            width: 100%;
            height: 135px;
            background: url('../images/header-image.png') repeat-x center 0;
            background-size: 1348px;
        }
        
        .logo {
            width: 83px;
            height: 116px;
            background: url('../images/logo.png') no-repeat center;
            background-size: cover;
            position: relative;
            margin: 20px 0 0 20px;
            display: inline-block;
        }
        
        .header-center-wrap {
            width: 432px;
            height: 93px;
            /*border: 1px solid black;*/
            position: absolute;
            left: 50%;
            top: 24px;
            -webkit-transform: translate(-50%, 0);
            -moz-transform: translate(-50%, 0);
            -ms-transform: translate(-50%, 0);
            -o-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
        }
        
        .child {
            width: inherit;
            height: inherit;
            position: relative;
            margin: 0;
            padding: 0;
        }
        
        .delivery-text {
            margin-left: 0;
            font-family: GothamPro-medium, sans-serif;
            font-size: 17px;
            color: #969696;
            padding-bottom: 15px;
            border-bottom: 1px solid #EEEEEE;
        }
        
        .delivery-text > span {
            margin-left: 20px;
            font-family: GothamPro-bold, sans-serif;
            font-size: 28px;
            color: #FCC200;
        }
        
        .navigation-menu {
            margin-top: 22px;
            width: 100%;
            height: 20px;
        }
        
        .navigation-menu ul {
            padding-left: 0;
            text-align: center;
        }
        
        .navigation-menu ul li {
            list-style-type: none;
            display: inline-block;
            margin-right: 40px;
        }
        
        .navigation-menu ul li:last-child {
            margin-right: 0;
        }
        
        .navigation-menu ul li a {
            font-family: GothamPro, sans-serif;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            color: #1D1D1B;
            letter-spacing: 2px;
        
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -ms-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
        }
        
        .navigation-menu ul li a:hover {
            color: #FCC200;
        
            -webkit-transition: all 0.5s;
            -moz-transition: all 0.5s;
            -ms-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
        }
        
        .order-block {
            width: 130px;
            height: 103px;
            /*border: 1px solid black;*/
            position: absolute;
            right: 2px;
            top: 18px;
        }
        
        .order-block-icon {
            margin: 0;
            text-align: center;
        }
        
        .order-block-icon > img {
            width: 68px;
            height: 68px;
        }
        
        .order-block-text {
            margin-top: 13px;
            text-align: center;
        }
        
        a .order-block-text {
            font-family: GothamPro-medium, sans-serif;
            font-size: 14px;
            color: #1D1D1B;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 2px;
        }
    </style>
</head>
<body>
    <div class="header-placeholder"></div>
    <header>
        <div class="carcass">
            <div class="logo"></div>
            <div class="header-center-wrap">
                <div class="child">
                    <div class="delivery-text">
                        Доставка по бишкеку <span>0 777 56 32 12</span>
                    </div>
                    <div class="navigation-menu">
                        <ul>
                            <li><a href="#">главная</a></li>
                            <li><a href="#">блюды</a></li>
                            <li><a href="#">меню</a></li>
                            <li><a href="#">контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <a href="#">
                <div class="order-block">
                    <div class="order-block-icon">
                        <img src="public/images/orders-icon.svg" />
                    </div>
                    <div class="order-block-text">
                        мои заказы
                    </div>
                </div>
            </a>
        </div>
    </header>
    <div class="header-image"></div>
</body>
</html>