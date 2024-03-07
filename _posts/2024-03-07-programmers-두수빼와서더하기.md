---
date: 2024-03-07 00:00:00
layout: post
title: 프로그래머스 두 수 뽑아서 더하기[자바]
subtitle: 프로그래머스 두 수 뽑아서 더하기 Lv1[자바]
description: 자바언어로 프로그래머스 두 수 뽑아 더하기
image: /assets/img/java-logo.gif
optimized_image: /assets/img/java-logo.gif
category: algorithm
tags:
  - study
  - java
author: byeongjunjang
paginate: true
---

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/68644">두 개 뽑아 더하기</a>

## 문제 설명

> 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

### 제한사항

> numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

### 입출력 예

<table>
  <thead>
    <tr>
      <th>numbers</th>
      <th>result</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>[2,1,3,4,1]</td>
      <td>[2,3,4,5,6,7]</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>[5,0,2,7]</td>
      <td>[2,5,7,9,12]</td>
    </tr>
  </tbody>
</table>

## 정답 코드

<pre>
<code>import java.util.TreeSet;

class Solution {
    public int[] solution(int[] arr) {
        TreeSet &lt;Integer&gt; set = new TreeSet&lt;&gt;();
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                set.add(arr[i]+arr[j]);
            }
        }
        int[] result = new int[set.size()];
        for (int i = 0; i < result.length; i++){
            result[i] = set.pollFirst();
        }
        return result;
    }
}</code></pre>