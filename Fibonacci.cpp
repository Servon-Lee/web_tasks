#include <iostream>
using namespace std;
double a = 1;
double b = 1;

int main(){
	for(int i = 0; i<50; i++){
		cout<<a<<' '<<b<<' ';
		a = a+b;
		b = a+b;
	}
	return 0;
}