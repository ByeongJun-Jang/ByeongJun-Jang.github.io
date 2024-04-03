---
date: 2024-04-03 00:00:00
layout: post
title: 프로그래머스 올바른 괄호[자바]
subtitle: 프로그래머스 올바른 괄호 Lv2[자바]
description: 자바언어로 올바른 괄호
image: /assets/img/programmers1.png
optimized_image: /assets/img/programmers.png
category: algorithm
tags:
  - study
  - java
  - algorithm
author: byeongjunjang
paginate: true
---

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12909">올바른 괄호</a>

## 문제 설명

> 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.  
예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.  
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.  
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고,  
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
  
### 제한사항

- 문자열 s의 길이 : 100,000 이하의 자연수  
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

### 입출력 예

<table>
  <thead>
    <tr>
      <th>s</th>
      <th>answer</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>"()()"</td>
      <td>true</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>"(())()"</td>
      <td>true</td>
    </tr>
    <tr>
      <td>")()("</td>
      <td>false</td>
    </tr>
    <tr>
      <td>"(()("</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## 정답 코드

{% highlight java %}
import java.util.ArrayDeque;

public class RightGwalho {
    public static void main(String[] args) {
        System.out.println(solution("()()"));
        System.out.println(solution("(())()"));
        System.out.println(solution(")()("));
        System.out.println(solution("(()("));
    }

    static boolean solution(String s) {
        ArrayDeque<Character> st = new ArrayDeque<>();
        char[] chars = s.toCharArray();
        for (char Char : chars) {
            if (Char == '(') {
                st.push(Char);
            } else {
                if (st.isEmpty() || st.pop() == Char) {
                    return false;
                }
            }
        }

        return st.isEmpty();
    }
}

{% endhighlight %}
