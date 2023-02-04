import React, { useRef, useEffect } from 'react';
import FamilyTree from "@balkangraph/familytree.js";

const Chart = (props) => {
    const divRef = useRef(null);

    useEffect(() => {
        const family = new FamilyTree(divRef.current, {
            enableSearch: false,
            template: 'hugo',
            nodes: props.nodes,
            nodeMenu: {
                edit: { text: 'Edit' },
                details: { text: 'Details' },
            },
            nodeTreeMenu: true,
            nodeBinding: {
                field_0: 'name',
                field_1: 'born',
                img_0: 'img',
            },
            editForm: {
                titleBinding: "name",
                photoBinding: "photo",
                addMoreBtn: 'Add element',
                addMore: 'Add more elements',
                addMoreFieldName: 'Element name',
                generateElementsFromFields: false,
                elements: [
                    { type: 'textbox', label: 'Full Name', binding: 'name' },
                    { type: 'textbox', label: 'Email Address', binding: 'email' },
                    [
                        { type: 'textbox', label: 'Phone', binding: 'phone' },
                        { type: 'date', label: 'Date Of Birth', binding: 'born' }
                    ],
                    [
                        { type: 'select', options: [{ value: 'bg', text: 'Bulgaria' }, { value: 'ru', text: 'Russia' }, { value: 'gr', text: 'Greece' }], label: 'Country', binding: 'country' },
                        { type: 'textbox', label: 'City', binding: 'city' },
                    ],
                    { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
                ]
            },
        });
        family.on('field', function (sender, args) {
            if (args.name === 'born') {
                var date = new Date(args.value);
                args.value = date.toLocaleDateString();
            }
        });
    }, [props.nodes]);

    // === Tried to have some influence on the template === //
    // // FamilyTree.templates.tommy_female.field_0 =
    // //     '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
    // // FamilyTree.templates.tommy_female.field_1 =
    // //     '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';
    // // FamilyTree.templates.tommy_male.field_0 =
    // //     '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
    // // FamilyTree.templates.tommy_male.field_1 =
    // //     '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';

    return <div id="tree" ref={divRef}></div>;
};

export default Chart;