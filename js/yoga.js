
//decalre array for table content
let tableData = [
    {'Resort':'Ananda in the Himalayas','Place':'Rishikesh','Speciality':'The prime Specialization of Ananda is the spa. They have more than 80 varieties of spa therapies which are the mixture of traditional Ayurveda with modern spa.'},
    {'Resort':'Himalaya Shanti Ashram','Place':'Dharamshala','Speciality':'This Centre is located in a small mountain village surrounded by forests. The surroundings here are quieter and much more serene. They have this belief that being closer to nature is the perfect environment for practising this sacred art.'},
    {'Resort':'The Mandala Resort','Place':'Goa','Speciality':'The Mandala Resort is a tranquil oasis within which to enjoy a luxurious yoga retreat or holiday. Their holistic approach to wellness touches all of mind, body, and spirit as they offer both yoga retreats and fasting programs.'},
    {'Resort':'Devaaya','Place':'Goa','Speciality':'One can prefer the center for Ayurveda treatment and therapies for joint pains, rheumatism, arthritis, diabetes, spondylitis, and partial paralysis. Panchakarma and wellness treatments are the highlights of Ayurveda treatment in Devaaya.'},
    {'Resort':'Carnoustie Ayurveda and Wellness Resort','Place':'Kerala','Speciality':'Extensive gardens growing Ayurvedic herbs, yoga, meditation, and chanting hall, well-stocked library, music and cultural performances, and a house boat available for relaxing cruises on the Punnamada and Vembanad Lakes.'},
    {'Resort':'SwaSwara Resort','Place':'Gokarna','Speciality':'Nature trails and bird watching, boat rides, village visits, interactive cooking classes, art studio, large oxidized swimming pool, meditation deck on the cliff, and yoga and meditation hut.'}
];
   
//decalre fucntion on page load event
window.onload = () => {
loadTableData(tableData);
};

//create function for adding content in table body
function loadTableData(tableData) {

    const tableBody = document.getElementById('myTable');
    let dataHtml = '';
    
    //set the content of table in varaiable using for loop
    for(let resort of tableData) {
        dataHtml += `<tr>
        <td>${resort.Resort}</td>
        <td>${resort.Place}</td>
        <td>${resort.Speciality}</td>
        </tr>`;
    }

    console.log(dataHtml);

    //set the vlaue in table body 
    tableBody.innerHTML = dataHtml;
}
