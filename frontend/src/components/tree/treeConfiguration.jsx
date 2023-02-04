import FamilyTree from "@balkangraph/familytree.js";

FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.base);
FamilyTree.templates.myTemplate.defs =
    `<clipPath id="hugo_img_0"><rect id="hugo_img_0_stroke" stroke-width="2" stroke="#fff" x="90" y="-5" rx="25" ry="25" width="70" height="70"></rect></clipPath>
    <linearGradient id="hugo_grad_female" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#FF8024;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FF46A3;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="hugo_grad_male" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#00D3A5;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00A7D4;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="hugo_grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#D0D0D0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#909090;stop-opacity:1" />
    </linearGradient>
    <g id="hugo_up">
    <circle cx="12" cy="12" r="15" fill="transparent"></circle>
        ${FamilyTree.icon.ft(24, 24, '#fff', 0, 0)}
    </g>
    <g id="hugo_node_menu" style="cursor:pointer;">
        <rect x="0" y="0" fill="transparent" width="22" height="22"></rect>
        <circle cx="11" cy="4" r="2" fill="#ffffff"></circle><circle cx="11" cy="11" r="2" fill="#ffffff"></circle>
        <circle cx="11" cy="18" r="2" fill="#ffffff"></circle>
    </g>
        <style>
           .{randId} .bft-edit-form-header{
                background: linear-gradient(90deg, #D0D0D0 0%, #909090 100%);
            }
            .{randId}.male .bft-edit-form-header{
                background: linear-gradient(90deg, #00D3A5 0%, #00A7D4 100%);
            }
            .{randId}.female .bft-edit-form-header{
                background: linear-gradient(90deg, #FF8024 0%, #FF46A3 100%);
            }  
            .{randId} .bft-img-button{
                background-color: #909090;
            }      
            .{randId} .bft-img-button:hover{
                background-color: #D0D0D0;
            }
            .{randId}.male .bft-img-button{
                background-color: #00A7D4;
            }      
            .{randId}.male .bft-img-button:hover{
                background-color: #00D3A5;
            }
            .{randId}.female .bft-img-button{
                background-color: #FF46A3;
            }      
            .{randId}.female .bft-img-button:hover{
                background-color: #FF8024;
            }
    </style>`;
FamilyTree.templates.myTemplate.img_0 =
    `<use xlink:href="#hugo_img_0_stroke" />
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#hugo_img_0)" xlink:href="{val}" x="90" y="-5" width="70" height="70"></image>`;
FamilyTree.templates.myTemplate.field_0 =
    '<text ' + FamilyTree.attr.width + ' ="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="125" y="85" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 =
    '<text ' + FamilyTree.attr.width + ' ="230" style="font-size: 14px;" fill="#ffffff" x="125" y="105" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.node = '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad) stroke="#aeaeae" rx="7" ry="7"></rect>';
FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.hugo);
FamilyTree.templates.myTemplate.node =
    '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad_male) stroke="#aeaeae" rx="7" ry="7"></rect>';
FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.hugo);
FamilyTree.templates.myTemplate.node =
    '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad_female) stroke="#aeaeae" rx="7" ry="7"></rect>';

FamilyTree.templates.myTemplate.up = '<use x="200" y="10" xlink:href="#hugo_up" />';
FamilyTree.templates.myTemplate.nodeMenuButton = `<use x="225" y="10" ${FamilyTree.attr.control_node_menu_id}="{id}" xlink:href="#hugo_node_menu" />`;  