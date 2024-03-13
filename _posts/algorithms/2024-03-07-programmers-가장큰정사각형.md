---
date: 2024-03-07 00:00:00
layout: post
title: 프로그래머스 가장 큰 정사각형 찾기[자바]
subtitle: 프로그래머스 가장 큰 정사각형 찾기 Lv2[자바]
description: 자바언어로 가장 큰 정사각형 찾기
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

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12905">가장 큰 정사각형 찾기</a>

## 문제 설명

> 1와 0로 채워진 표(board)가 있습니다.  
표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 
표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요.
  
### 제한사항

> 표(board)는 2차원 배열로 주어집니다.  
표(board)의 행(row)의 크기 : 1,000 이하의 자연수  
표(board)의 열(column)의 크기 : 1,000 이하의 자연수  
표(board)의 값은 1또는 0으로만 이루어져 있습니다.


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
      <td>[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]</td>
      <td>9</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>[[0,0,1,1],[1,1,1,1]]</td>
      <td>4</td>
    </tr>
  </tbody>
</table>

## 풀이

- 문제는 배열 요소에 1이 있는지 먼저 판단한다.  
- 탐색 시 1,1부터 탐색한다.
 - 이는 위,왼,왼 대각을 탐색하기 위함
- 점화식 적용

#### 점화식

> arr[i][j] += Math.min(Math.min(arr[i - 1][j], arr[i][j - 1]), arr[i - 1][j - 1]);

#### 최대값 뽑기

- 스트림을 활용해 최대 값을 뽑아보자.

## 정답 코드

{% highlight java %}
import java.util.Arrays;

class Solution
{
    public static int solution(int[][] arr) {
        int row = arr.length;
        int col = arr[0].length;
        for (int i = 1; i < row; i++) {
            for (int j = 1; j < col; j++) {
                if (arr[i][j] == 1) {
                    arr[i][j] += Math.min(Math.min(arr[i - 1][j], arr[i][j - 1]), arr[i - 1][j - 1]);
                }
            }
        }
        int max = Arrays.stream(arr)
                .flatMapToInt(Arrays::stream)
                .max().orElseThrow();
        return max * max;
    }
}
{% endhighlight %}
