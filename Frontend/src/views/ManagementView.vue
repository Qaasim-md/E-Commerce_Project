<template>
  <div class="management-page">
    <header class="topbar">
      <div>
        <p class="label">Management Portal</p>
        <h1>Welcome, {{ displayUser }}</h1>
      </div>
      <button class="logout-btn" @click="logout">Log Out</button>
    </header>

    <main class="content">
      <section class="card">
        <h2>Operations</h2>
        <p>This page is restricted to management users only.</p>
        <ul>
          <li>Monitor orders and payment status</li>
          <li>Review customer activity</li>
          <li>Manage products and pricing</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { clearManagementSession, getManagementUser } from '../utils/managementAuth'

const router = useRouter()
const displayUser = computed(() => getManagementUser() || 'Manager')

function logout() {
  clearManagementSession()
  router.push('/login')
}
</script>

<style scoped>
.management-page { min-height: 100vh; background: #f7f3ef; color: #2d1f14; padding: 40px 5%; }
.topbar { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 24px; }
.label { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #a05535; margin: 0; }
h1 { margin: 6px 0 0; font-size: 32px; }
.logout-btn { background: #2d1f14; color: #fff; border: none; padding: 10px 16px; border-radius: 6px; cursor: pointer; }
.content { max-width: 900px; }
.card { background: #fff; border: 1px solid rgba(45,31,20,0.1); border-radius: 10px; padding: 20px; }
h2 { margin-top: 0; }
ul { margin: 12px 0 0 18px; }
</style>
