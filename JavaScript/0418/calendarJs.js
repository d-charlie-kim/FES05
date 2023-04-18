function calendar(newYear, newMonth) {
	// 1. 무슨 요일에 시작하는지 확인
	const time = new Date(newYear, newMonth - 1, 1);

	// 2. 해당 달에 며칠이 있는지 확인
	const timeLength = new Date(newYear, newMonth, 0).getDate(); // 다음달 1일의 전날 === 이번달 마지막 날

	let year = time.getFullYear(),
			month = time.getMonth(),
			date = time.getDate(),
			day = time.getDay();

	const captionYear = document.querySelector('.year'),
				captionMonth = document.querySelector('.month'),
				timeEl = document.querySelector('time'),
				days = document.querySelectorAll('tr td');

	for (let i = 0; i < days.length; i++) {
		days[i].innerHTML = '&nbsp'; // textContent 아니고 innerHTML 사용 :: HTML 특수문자를 사용하기 위해 :: 날짜가 없는 행도 간격 유지하기 위해
	}

	for (let i = day; i < day + timeLength; i++) {
		days[i].textContent = date++;
	}

	captionYear.textContent = year;
	captionMonth.textContent = month + 1;
	timeEl.dateTime = `${year}-${month + 1}`;
}

const btns = document.querySelectorAll('button');
btns.forEach((item) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('prev'))
			calendar(year, --month); // month 자체가 바뀌어야 하기 때문에 증감 연산자 사용 (month - 1 사용 안됨)
		else
			calendar(year, ++month);
	})
})

let year = new Date().getFullYear(),
		month = new Date().getMonth() + 1;

calendar(year, month);