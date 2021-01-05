/**
 reverse
    write a recursive function called reverse which accepts a string and returns a new string in reverse;

    // reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
 */


const reverse = (str) => {
    if (str.length === 0) {
        return "";
    }
    return str[str.length - 1] + reverse(str.slice(0, (str.length - 1)));
}

console.log(reverse("awesome"))
console.log(reverse("rithmschool"))

