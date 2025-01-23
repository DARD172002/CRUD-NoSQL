import matplotlib.pyplot as plt
import numpy as np

# Datos de rendimiento
operations = ['Create', 'Read', 'Update', 'Delete']
mongodb_times = [111.83, 5.315, 49.098, 20.183]  # Tiempos en milisegundos para MongoDB
redis_times_seconds = [5.92, 0.002182, 3.076, 2.435]  # Tiempos en segundos para Redis

# Convertir tiempos de Redis a milisegundos
redis_times = [time * 1000 for time in redis_times_seconds]

# Configuración del gráfico
x = np.arange(len(operations))  # Posiciones de las barras
width = 0.35  # Ancho de las barras

# Crear figura y ejes
fig, ax = plt.subplots(figsize=(10, 6))

# Añadir barras para MongoDB y Redis
bars_mongodb = ax.bar(x - width/2, mongodb_times, width, label='MongoDB', color='skyblue')
bars_redis = ax.bar(x + width/2, redis_times, width, label='Redis', color='salmon')

# Etiquetas y título
ax.set_xlabel('Operación', fontsize=14)
ax.set_ylabel('Tiempo (ms)', fontsize=14)
ax.set_title('Comparación de Rendimiento: MongoDB vs Redis', fontsize=16)
ax.set_xticks(x)
ax.set_xticklabels(operations, fontsize=12)
ax.legend(fontsize=12)

# Añadir valores encima de las barras
for bars in [bars_mongodb, bars_redis]:
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2, height + 50, f'{height:.2f}', 
                ha='center', va='bottom', fontsize=10)

# Guardar y mostrar el gráfico
plt.tight_layout()
plt.savefig('comparacion_rendimiento.png', dpi=300)
plt.show()
