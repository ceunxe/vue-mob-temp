// 设置token
export function setToken(val) {
  const obj = {
    token: val,
    addTime: Date.now()
  };
  localStorage.setItem("nToken", JSON.stringify(obj));
}

// 获取token
export function getToken() {
  const token = JSON.parse(localStorage.getItem("nToken")) || "";
  return token.token;
}

// json转formdata
export function changeForm(val) {
  const formData = new FormData();
  Object.keys(val).forEach(key => {
    formData.append(key, val[key]);
  });
  return formData;
}