type TId = string | number

const id: TId = 1

function x(id: TId): TId {
  if (typeof id === "string") {
    return id.toUpperCase()
  } else {
    return id + 1
  }
}

console.log(x(10))
