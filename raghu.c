#include<Stdio.h>
int main()
{
    int a[10] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16};
    int r;
    scanf("%d" , &r);
    for(int i = 0; i<9 ; i++)
    {
        if(a[i]==r)
        {
            printf("%d is found at index %d\n",r,i+1);
        }
    }

return 0;
}   