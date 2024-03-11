---
date: 2024-03-08 00:00:00
layout: post
title: 프로그래머스 행렬의 곱셈[자바]
subtitle: 프로그래머스 행렬의 곱셈 Lv2[자바]
description: 자바언어로 행렬의 곱셈
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

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12949">행렬의 곱셈</a>

## 문제 설명

> 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
    
### 제한사항

> 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.  
행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.  
곱할 수 있는 배열만 주어집니다.

### 입출력 예

<table>
  <thead>
    <tr>
      <th>arr1</th>
      <th>arr2</th>
      <th>return</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>[[1, 4], [3, 2], [4, 1]]</td>
      <td>[[3, 3], [3, 3]]</td>
      <td>[[15, 15], [15, 15], [15, 15]]</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>[[2, 3, 2], [4, 2, 4], [3, 1, 4]]</td>
      <td>[[5, 4, 3], [2, 4, 1], [3, 1, 1]]</td>
      <td>[[22, 22, 11], [36, 28, 18], [29, 20, 14]]</td>
    </tr>
  </tbody>
</table>


## 정답 코드

> 아래는 결과 출력을 위해 작성했다.

{% highlight java %}
  public class ArrMultiplication {
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(soulution(
                new int[][]{
                        {1, 4}, {3, 2}, {4, 1}
                },
                new int[][]{
                        {3, 3}, {3, 3}
                })));
        System.out.println(Arrays.deepToString(soulution(
                new int[][]{
                        {2,3,2}, {4,2,4}, {3,1,4}
                },
                new int[][]{
                        {5,4,3}, {2,4,1}, {3,1,1}
                })));
    }
    public static int[][] soulution(int[][] arr1, int[][] arr2) {
        int arr1Row = arr1.length;
        int arr1Col = arr1[0].length;
        int arr2Col = arr2[0].length;
        int[][] result = new int[arr1Row][arr2Col];
        for (int i = 0; i < arr1Row; i++) {
            for (int j = 0; j < arr2Col; j++) {
                for (int k = 0; k < arr1Col; k++) {
                    result[i][j] += arr1[i][k] * arr2[k][j];
                }
            }
        }

        return result;
    }
}
{% endhighlight %}
