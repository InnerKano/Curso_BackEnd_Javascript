lista = [1,2,3,4,5,6,7,8,9,10]

def  reverse_list(lista):
    inicio = 0
    fin = len(lista) - 1
    while  inicio < fin:
        lista[inicio],lista[fin]= lista[fin],lista[inicio]
        inicio += 1 
        fin -=1
    return lista

print(reverse_list(lista)) 