from abc import ABC,abstractmethod
class A(ABC):
    @abstractmethod
    def afficher(self):
        pass
    
class B(A):
    def __init__(self,name) -> None:
        self.name=name
        
    def afficher(self):
        print("hello")
              
#https://www.youtube.com/watch?v=oX5ElI-koww