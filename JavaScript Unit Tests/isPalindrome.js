function isPalindrome(word) {
  return (
    word.toLowerCase() === word.toLowerCase().split("").reverse("").join("")
  );
}

module.exports = isPalindrome
