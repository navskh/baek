#include <iostream>

using namespace std;

int main()
{
  // 변수 선언
    int n, tmp, arr[10000] = {0};
    cin >> n;
  // 입력받기
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &tmp);
        arr[tmp-1]++;
    }
  // 정렬
    for (int i = 0; i < 10000; i++)
    {
        if (arr[i])
        {
            for (int j = 0; j < arr[i]; j++)
              printf("%d\n", i+1);
        }
    }
    return 0;
}