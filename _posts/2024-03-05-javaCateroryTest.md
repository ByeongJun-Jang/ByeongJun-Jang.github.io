---
date: 2024-03-05 00:00:00
layout: post
title: [자바]
subtitle: [자바]
description: 자바언어
image: /assets/img/Taking.jpeg
optimized_image: /assets/img/Taking.jpeg
category: java
tags:
  - java
author: byeongjunjang
paginate: true
---

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/42840">모의고사</a>

## 문제 설명

> 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.  
  
1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...  
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...  
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...  
  
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
  
### 제한사항

> 시험은 최대 10,000 문제로 구성되어있습니다.  
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.  
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

### 입출력 예

<table>
  <thead>
    <tr>
      <th>answer</th>
      <th>return</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>[1,2,3,4,5]</td>
      <td>[1]</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>[1,3,2,4,2]</td>
      <td>[1,2,3]</td>
    </tr>
  </tbody>
</table>

## 풀이

- 이 문제는 **수포자들의 찍는 패턴을 먼저 알아야한다.**  
- 만약 답이 패턴의 길이보다 길다면 비교 후 다시 연산을 해야한다.

## 정답 코드

<pre>
<code>public static void main(String[] args) {
        System.out.println(Arrays.toString(solution(new int[]{1, 3, 2, 4, 2})));
        System.out.println(Arrays.toString(solution(new int[]{1, 2, 3, 4, 5})));
    }

    public static int[] solution(int[] arr) {
        int[][] supoza = {
                {1, 2, 3, 4, 5},
                {2, 1, 2, 3, 2, 4, 2, 5},
                {3, 3, 1, 1, 2, 2, 4, 4, 5, 5}
        };
        int[] answer = new int[supoza.length];
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < supoza.length; j++) {
                if (arr[i] == supoza[j][i % supoza[j].length]) {
                    answer[j]++;
                }
            }
        }
        int maxScore = Arrays.stream(answer).max().getAsInt();
        ArrayList&lt;Integer&gt; result = new ArrayList<>();
        for (int i = 0; i < answer.length; i++) {
            if (answer[i] == maxScore) {
                result.add(i + 1);
            }
        }
        return result.stream().mapToInt(Integer::intValue).toArray();
    }</code></pre>