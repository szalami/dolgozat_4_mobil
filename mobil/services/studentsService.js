
/*
* File: studentsService.js
* Author: Faragó Csaba
* Copyright: 2024, Faragó Csaba
* Group: Szoft II_1_E
* Date: 2024-04-05
* Github: https://github.com/szalami/dolgozat_4_mobil.git
* Licenc: GNU GPL
*/

const host = 'http://localhost:8000/';
const endpoint = 'students';

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}