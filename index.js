var array = [];
function addNumber() {
  var number = +document.getElementById("inputNumber").value;
  array.push(number);
  document.getElementById("txtArray").innerHTML = array;
  document.getElementById("inputNumber").value = null;
}

function sumPositive() {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
  document.getElementById("txtSum").innerHTML = `Tổng số dương là ${sum}`;
}

function countNumber() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) count++;
  }
  document.getElementById(
    "txtCount"
  ).innerHTML = `Mảng có tổng cộng ${count} số dương`;
}

function leastNumber() {
  var min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  document.getElementById(
    "txtLeast"
  ).innerHTML = `Số nhỏ nhất trong mảng là ${min}`;
}

function leastPostiveNumber() {
  var postiveArr = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      postiveArr.push(array[i]);
      console.log(postiveArr);
    }
  }

  var min = postiveArr[0];

  for (var i = 0; i < postiveArr.length; i++) {
    if (postiveArr[i] < min) {
      min = postiveArr[i];
    }
  }
  document.getElementById(
    "txtLeastPostive"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là ${min}`;
}

function lastEven() {
  var a = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      a = array[i];
      console.log(a);
    }
  }
  document.getElementById(
    "txtLastEven"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là ${a}`;
}

function changePostion() {
  var copyArr = [];
  for (var i = 0; i < array.length; i++) {
    copyArr[i] = array[i];
  }
  var index1 = +document.getElementById("inputIndex1").value;
  var index2 = +document.getElementById("inputIndex2").value;
  var buffer = 0;
  buffer = copyArr[index1];
  copyArr[index1] = copyArr[index2];
  copyArr[index2] = buffer;
  console.log(copyArr);
  document.getElementById(
    "txtChange"
  ).innerHTML = `Mảng sau khi đổi chỗ ${copyArr}`;
}

function arrangeNumber() {
  var buffer;
  var copyArr = [];
  for (var i = 0; i < array.length; i++) {
    copyArr[i] = array[i];
  }

  for (var i = 0; i < copyArr.length; i++) {
    isArranged = true;
    for (var k = 0; k < copyArr.length - i; k++) {
      if (copyArr[k] > copyArr[k + 1]) {
        buffer = copyArr[k];
        copyArr[k] = copyArr[k + 1];
        copyArr[k + 1] = buffer;
        isArranged = false;
      }
    }
    if (isArranged) break;
  }

  document.getElementById(
    "txtArrange"
  ).innerHTML = `Mảng sau khi sắp xếp tăng dần là ${copyArr}`;
}

//Tìm số nguyên tố
function findPrime() {
  var copyArr = [];
  for (var i = 0; i < array.length; i++) {
    copyArr[i] = array[i];
  }
  var primeNumber = 0;
  for (var i = 0; i < copyArr.length; i++) {
    isPrime = true;
    for (var k = 2; k < Math.sqrt(copyArr[i]); k++) {
      if (copyArr[i] % k == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumber = copyArr[i];
      document.getElementById(
        "txtPrime"
      ).innerHTML = `Số nguyên tố đầu tiên là ${primeNumber}`;
      break;
    } else {
      document.getElementById(
        "txtPrime"
      ).innerHTML = `Không tìm thấy số nguyên tố`;
    }
  }
}

function countInterger() {
  var copyArr = [];
  for (var i = 0; i < array.length; i++) {
    copyArr[i] = array[i];
  }
  var numInterger = 0;
  for (var k = 0; k < copyArr.length; k++) {
    if (Number.isInteger(copyArr[k])) {
      numInterger++;
    }
  }
  if (numInterger == 0) {
    document.getElementById(
      "txtInterger"
    ).innerHTML = `Mảng không có số nguyên`;
  } else {
    document.getElementById(
      "txtInterger"
    ).innerHTML = `Mảng có ${numInterger} số nguyên`;
  }
}

function compareNumber() {
  var copyArr = [];
  for (var i = 0; i < array.length; i++) {
    copyArr[i] = array[i];
  }
  var negative = 0;
  var postive = 0;
  for (var k = 0; k < copyArr.length; k++) {
    if (copyArr[k] > 0) {
      postive++;
    } else if (copyArr[k] < 0) {
      negative++;
    }
  }
  if (postive > negative) {
    document.getElementById("txtCompare").innerHTML = `Số dương lớn hơn số âm`;
  } else if (postive < negative) {
    document.getElementById("txtCompare").innerHTML = `Số dương  nhỏ hơn số âm`;
  } else {
    document.getElementById("txtCompare").innerHTML = `Số dương  bằng số âm`;
  }
}
