---
date: 2024-02-23 00:00:00
layout: post
title: 프로그래머스 문자열 내 p와 y 개수[자바]
subtitle: 프로그래머스 문자열 내 p와 y 개수 Lv1[자바]
description: 자바언어로 문자열 내 p와 y 개수
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

## ★ 문제
[p와 y개수 Level 1](https://school.programmers.co.kr/learn/courses/30/lessons/12916)

> 단순히 p와 y개수 세는 것이다.

### ✓ 문제풀이

1. toLowerCase 메소드를 사용해 풀었다.  
2. 처음 문자열을 배열로 해 풀려했지만 굳이 이럴 필요 있나 생각해서 위의 메소드를 사용했다.

### ☻ 정답 코드

{% highlight java %}
class Solution {
    boolean solution(String s) {
        boolean answer = true;
        s=s.toLowerCase();
        int pC = 0;
        int yC = 0;
        for(int i=0; i < s.length();i++){
            if (s.charAt(i)=='p'){
                pC++;
            } else if (s.charAt(i)=='y') {
                yC++;
            }
        }
        answer = (pC == yC);

        return answer;
    }
}
{% endhighlight %}
