import state from '../state/state';

function render() {
  state.news.forEach((title) => {
    const logo = document.querySelector('.logo');

    const divU = document.createElement('div');

    const ul = document.createElement('ul');

    const li = document.createElement('li');

    const liT = title.title[0].toUpperCase() + title.title.slice(1);
    const liC = title.categories[0].toUpperCase() + title.categories.slice(1);

    li.addEventListener('click', async (e) => {
      let commentsR = title.Comments.length === 0 ? 'none' : title.Comments;
      li.textContent = `Title: ${liT},
       Catigories:${liC},
       Comments: ${commentsR}`;
    });
    li.textContent = `Title: ${liT}`;

    ul.append(li);
    divU.append(ul);
    logo.append(divU);
  });
  //-------------------------------------------------------------
  const mapC = state.news.map((catigories) => {
    return catigories.categories;
  });

  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }
  const massC = unique(mapC);

  massC.forEach((item) => {
    const logo2 = document.querySelector('.logo2');
    const divC = document.createElement('div');
    const h3 = document.createElement('h3');
    const Irems = item[0].toUpperCase() + item.slice(1);

    divC.style.marginLeft = '20px';

    h3.textContent = `Categories: ${Irems}`;
    divC.append(h3);
    logo2.append(divC);

    h3.addEventListener('click', async () => {
      state.news.forEach((itemC) => {
        if (item === itemC.categories) {
          const ul = document.createElement('ul');
          const li = document.createElement('li');
          li.textContent = itemC.title;
          ul.append(li);
          divC.append(ul);
          h3.textContent = `Categories: ${Irems}`;
          // console.log(itemC.title);
        }
      });
    });
  });
}

export default render;
