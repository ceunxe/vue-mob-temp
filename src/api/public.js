import http from "@util/http";

// 案例
export function pub_upload(data) {
  return http({
    url: "/api/upload",
    method: "post",
    data
  })
}