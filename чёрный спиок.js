let arrayOfEmails = new Array();
let blackList = new Array();

arrayOfEmails = ['koshmanov@mail.ru', 'panov@mail.ru', 'andrey@mail.ru', 'danil@mail.ru', 'banan@mail.ru'];
blackList = ['panov@mail.ru', 'andrey@mail.ru'];


console.log("Все эмайлы:\n" + arrayOfEmails.join("|") );
console.log("черный список:\n" + blackList.join("|") );
filter(arrayOfEmails, blackList);
function filter(allEmails, blackList) {
  for (let i = 0; i < allEmails.length; ++i) {
    for (let n = 0; n < blackList.length; n++) {
      if (allEmails[i] == blackList[n]) {
        allEmails.splice(i, 1);
        --i;
      }
    }
  }
  console.log("оставшиеся:\n" + allEmails.join("|") + "\n__");
}