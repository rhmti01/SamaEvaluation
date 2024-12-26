const gradeRecord = (gradeIndex) => {
    document.querySelectorAll(".radio-list").forEach(gradeRow => {
        gradeRow.children[gradeIndex].children[0].click();
    });
}

// pass numbers 0-8 as grade to function 
// 0 is best and 8 is worse!

gradeRecord(0)