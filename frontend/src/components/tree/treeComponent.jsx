import FamilyTree from './treeConstruct'

// === Tried to have some influence on the template === //
// // FamilyTree.templates.tommy_female.field_0 =
// //     '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
// // FamilyTree.templates.tommy_female.field_1 =
// //     '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';
// // FamilyTree.templates.tommy_male.field_0 =
// //     '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';
// // FamilyTree.templates.tommy_male.field_1 =
// //     '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';

const Tree = () => {
    return (
        <div>
            <FamilyTree nodes={[
                { id: 1, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/2.jpg', name: 'Zeph Daniels', born: '1954-09-29' },
                { id: 2, pids: [3], gender: 'male', photo: 'https://cdn.balkan.app/shared/m60/1.jpg', name: 'Rowan Annable', born: '1952-10-10' },
                { id: 3, pids: [1, 2], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/1.jpg', name: 'Laura Shepherd', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: 'Moscow', country: 'ru' },
                { id: 4, pids: [5], photo: 'https://cdn.balkan.app/shared/m60/3.jpg', name: 'Rowan Annable' },
                { id: 5, pids: [4], gender: 'female', photo: 'https://cdn.balkan.app/shared/w60/3.jpg', name: 'Lois Sowle' },
                { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://cdn.balkan.app/shared/w30/1.jpg', name: 'Tyler Heath', born: '1975-11-12' },
                { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://cdn.balkan.app/shared/m30/3.jpg', name: 'Samson Stokes', born: '1986-10-01' },
                { id: 8, mid: 7, fid: 6, gender: 'female', photo: 'https://cdn.balkan.app/shared/w10/3.jpg', name: 'Celeste Castillo', born: '2021-02-01' }
            ]} />
        </div>
    )
}

export default Tree