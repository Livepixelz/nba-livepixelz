export const separateLetters = (string) => {
  return string
    ? string.toString().replace(/\S/g, "<span class='letter'>$&</span>")
    : string
}
