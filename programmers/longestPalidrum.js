
// 가장 긴 팰린드롬https://programmers.co.kr/learn/courses/30/lessons/12904
// 문제 설명
// 앞뒤를 뒤집어도 똑같은 문자열을 팰린드롬(palindrome)이라고 합니다.
// 문자열 s가 주어질 때, s의 부분문자열(Substring)중 가장 긴 팰린드롬의 길이를 return 하는 solution 함수를 완성해 주세요.

//     예를들면, 문자열 s가 "abcdcba"이면 7을 return하고 "abacde"이면 3을 return합니다.

//         제한사항
// 문자열 s의 길이: 2, 500 이하의 자연수
// 문자열 s는 알파벳 소문자로만 구성
// 입출력 예
// s	answer
// "abcdcba"	7
// "abacde"	3
// 입출력 예 설명
// 입출력 예 #1
// 4번째자리 'd'를 기준으로 문자열 s 전체가 팰린드롬이 되므로 7을 return합니다.

// 입출력 예 #2
// 2번째자리 'b'를 기준으로 "aba"가 팰린드롬이 되므로 3을 return합니다.

function solution(s)
{
    const getMax = (arr) => { const m = Math.max.apply(null, arr); return m > 0 ? m : 1 }
    let [odd, even] = [[], []]
    const n = s.length

    for (let i = 0; i < n; i++)
    {
        if (i > 0 && i < n - 1)
        {
            if (s[i] === s[i + 1]) even.push(i)
            s[i - 1] === s[i + 1] ? odd.push(i) : null
        }
        else if (n === 2 && s[i] === s[i + 1]) even.push(i)
    }

    const go = (i, t, c, a) =>
    {
        if (t + i + a > n || t - i < 0) return c
        if (s[t + i + a] === s[t - i]) return go(i + 1, t, c + 1, a)
        return c
    }
    const oddCases = odd.map(e => (go(1, e, 0, 0) * 2) + 1)
    const evenCases = even.map(e => go(0, e, 0, 1) * 2)


    const answer = getMax(oddCases) > getMax(evenCases) ? getMax(oddCases) : getMax(evenCases)
    return n < 2 ? 1 : answer
}